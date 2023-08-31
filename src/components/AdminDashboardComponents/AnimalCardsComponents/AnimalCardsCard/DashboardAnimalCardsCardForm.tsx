import {
  AnimalEdit,
  GenreType,
  Pet,
  PetBreed,
  PutSheltersCardInterface,
} from "services/pet/petTypes";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  StyledCardFooter,
  StyledCardFormContentContainer,
  StyledCardImgContainer,
  StyledCardInputContainer,
} from "./utils/DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import {
  useDeleteStorageImages,
  useGetStorageImagesForAnimal,
  usePostStoragePictures,
} from "services/storage/storageServices";
import { useQueryClient } from "@tanstack/react-query";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePutShelterCardsAnimal } from "services/pet/petServices";
import DashboardAnimalCardsCardFields from "./DashboardAnimalCardsCardFields";
import useToast from "hooks/useToast";
import {
  AnimalCardsCardValidationSchema,
  PetCard,
} from "./utils/DashboardAnimalCardsUtils";
import AnimalCardsCardActions from "./AnimalCardsCardActions";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { KeyboardSensor, MouseSensor } from "utils/dndKitUtils/customEvents";
import PhotoPreviewImage from "components/SharedComponents/DragAndDrop/PhotoPreviewImage";
import DeleteAllImagesModal from "./DeleteAllImagesModal";
import ImageSkeleton from "./utils/ImageSkeleton";
import { ErrorSkeleton } from "./utils/ErrorSkeleton";

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: Pet;
}) => {
  const { showToast } = useToast();
  const {
    isSuccess: GetStorageImagesIsSuccess,
    data: imagesUrls,
    isLoading: GetStorageImagesIsLoading,
    isError: GetStorageImagesIsError,
  } = useGetStorageImagesForAnimal(data.photos, data.id);
  const [localImageUrls, setLocalImageUrls] = useState<string[]>(
    imagesUrls || []
  );
  const { mutate: deleteStorageImagesFn } = useDeleteStorageImages();
  const { mutate: postStoragePicture } = usePostStoragePictures();
  const { mutate: putShelterCardsFn } = usePutShelterCardsAnimal();
  const navigate = useNavigate();
  const initialValues: PetCard = {
    ...data,
    months: data.age,
    type: data.type as GenreType,
    breed: data.breed as PetBreed,
    newPhotos: [],
  };

  const handleOnFileDelete = (index: number) => {
    const photoList = [...photos];
    photoList.splice(index, 1);

    formik.setFieldValue("photos", photoList);
  };

  const handleSubmit = () => {
    if (formik.values.newPhotos && formik.values.newPhotos.length > 0) {
      postStoragePicture(formik.values.newPhotos, {
        onSuccess: (newData) => {
          formik.setFieldValue("photos", [...photos, newData]);
          queryClient.setQueryData(["shelterCardsCard", data.id], newData);
          const { newPhotos, ...values } = formik.values;
          putShelterCardsFn(
            {
              petId: data.id,
              description: values.description,
              name: values.name,
              gender: values.gender,
              isSterilized: values.isSterilized,
              weight: values.weight,
              months: values.months,
              photos: values.photos,
              isVisible: values.isVisible,
              category: values.type,
              breed: values.breed,
              marking: values.color,
              profilePhoto: values.photos[0],
            } as PutSheltersCardInterface,
            {
              onSuccess: () => {
                showToast(
                  `Karta zwierzęcia o imieniu ${formik.values.name} została zaktualizowana`,
                  "success"
                );
                const newPhotos = data.photos.filter((dataPhoto) => {
                  return !values.photos.includes(dataPhoto);
                });
                deleteStorageImagesFn(newPhotos);

                queryClient.invalidateQueries(["shelterCardsCard", data.id]);
                queryClient.invalidateQueries(["storageImages", data.id]);
              },
            }
          );
        },
      });
    } else {
      const { newPhotos, ...values } = formik.values;
      putShelterCardsFn(
        {
          petId: data.id,
          description: values.description,
          name: values.name,
          gender: values.gender,
          isSterilized: values.isSterilized,
          weight: values.weight,
          months: values.months,
          photos: values.photos,
          isVisible: values.isVisible,
          category: values.type,
          breed: values.breed,
          marking: values.color,
          profilePhoto: values.photos[0] || values.profilePhoto,
        } as PutSheltersCardInterface,
        {
          onSuccess: () => {
            showToast(
              `Karta zwierzęcia o imieniu ${formik.values.name} została zaktualizowana`,
              "success"
            );
            const newPhotos = data.photos.filter((dataPhoto) => {
              return !values.photos.includes(dataPhoto);
            });
            deleteStorageImagesFn(newPhotos);

            queryClient.invalidateQueries(["shelterCardsCard", data.id]);
            queryClient.invalidateQueries(["storageImages", data.id]);
          },
        }
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AnimalCardsCardValidationSchema,
    onSubmit: handleSubmit,
  });

  const photos = formik.values.photos;
  const photosLength =
    (formik.values.photos
      ? formik.values.photos.length + formik.values.newPhotos!.length
      : formik.values.newPhotos!.length) || 0;

  const queryClient = useQueryClient();

  const handleIndexFileChangeForm = (files: File[]) => {
    formik.setFieldValue("photos", files);
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const onDragEnd = (event: DragEndEvent) => {
    if (isEditOn) {
      const { active, over } = event;
      if (!over) return;

      if (active.id !== over?.id) {
        const activeIndex = photos.indexOf(String(active.id));
        const overIndex = photos.indexOf(String(over.id));

        const updatedPhotos = arrayMove(photos, activeIndex, overIndex);
        formik.setFieldValue("photos", updatedPhotos);
      }
    }
  };

  const removePhotoAtIndex = (indexToRemove: number) => {
    const updatedPhotos = formik.values.photos.filter(
      (_, index) => index !== indexToRemove
    );
    const updatedPhotosUrls = localImageUrls.filter(
      (_, index) => index !== indexToRemove
    );

    formik.setFieldValue("photos", updatedPhotos);
    setLocalImageUrls(updatedPhotosUrls);
  };

  useEffect(() => {
    if (GetStorageImagesIsSuccess) {
      setLocalImageUrls(imagesUrls);
    }
  }, [GetStorageImagesIsSuccess, imagesUrls]);

  return (
    <StyledCardFormContentContainer
      isEditOn={isEditOn}
      onSubmit={formik.handleSubmit}>
      {!isEditOn && <AnimalCardsCardActions id={data.id} />}

      {GetStorageImagesIsError && (
        <StyledCardImgContainer>
          {data.photos.map((photo, index) => (
            <ErrorSkeleton key={photo + index} />
          ))}
        </StyledCardImgContainer>
      )}

      {GetStorageImagesIsLoading && (
        <StyledCardImgContainer>
          {data.photos.map((photo, index) => (
            <ImageSkeleton key={photo + index} />
          ))}
        </StyledCardImgContainer>
      )}

      {localImageUrls && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}>
          <SortableContext
            items={photos}
            strategy={horizontalListSortingStrategy}>
            <StyledCardImgContainer>
              {localImageUrls.map((photo, index) => (
                <PhotoPreviewImage
                  removePhotoAtIndex={removePhotoAtIndex}
                  id={data.id}
                  index={index}
                  key={photo + index}
                  isEditOn={isEditOn}
                  photo={photo}
                />
              ))}
            </StyledCardImgContainer>
          </SortableContext>
        </DndContext>
      )}
      {data.photos && isEditOn && <DeleteAllImagesModal id={data.id} />}

      <StyledCardInputContainer>
        <DashboardAnimalCardsCardFields
          isEditOn={isEditOn}
          formik={formik}
        />

        {isEditOn && (
          <FormRow label="Dodaj nowe zdjęcia">
            <CustomFileInput
              existingFiles={photosLength}
              photos={photos}
              handleIndexFileChangeForm={handleIndexFileChangeForm}
              onFileDelete={handleOnFileDelete}
              onFileChange={(files: File[] | null | File) => {
                if (Array.isArray(formik.values.newPhotos)) {
                  formik.setFieldValue("newPhotos", [
                    ...formik.values.newPhotos,
                    files,
                  ]);
                }
              }}
              description="Zdjęcie maksymalnie 15MB"
            />
          </FormRow>
        )}
      </StyledCardInputContainer>
      {isEditOn && (
        <StyledCardFooter>
          <Button
            type="button"
            onClick={() => navigate(-1)}
            variant="outline">
            Anuluj
          </Button>
          <Button>Zapisz</Button>
        </StyledCardFooter>
      )}
    </StyledCardFormContentContainer>
  );
};

export default DashboardAnimalCardsCardForm;
