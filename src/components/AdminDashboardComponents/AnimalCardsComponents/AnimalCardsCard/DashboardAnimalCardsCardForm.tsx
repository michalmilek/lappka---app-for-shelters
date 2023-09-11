import { GenreType, PetItem, UpdatePet } from "services/pet/petTypes";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
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
import CustomFileInput from "components/SharedComponents/FileInput/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePutShelterCardsAnimal } from "services/pet/petServices";
import DashboardAnimalCardsCardFields from "./DashboardAnimalCardsCardFields";
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
import toastService from "singletons/toastService";

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: PetItem;
}) => {
  const {
    isSuccess: GetStorageImagesIsSuccess,
    data: imagesUrls,
    isLoading: GetStorageImagesIsLoading,
    isError: GetStorageImagesIsError,
  } = useGetStorageImagesForAnimal(data.photos, data.id);
  const [localImageUrls, setLocalImageUrls] = useState<string[]>(
    imagesUrls || []
  );
  const { mutate: postStoragePicture } = usePostStoragePictures();
  const { mutate: putShelterCardsFn } = usePutShelterCardsAnimal();
  const navigate = useNavigate();
  const initialValues: PetCard = {
    ...data,
    isSterilized: data.isSterilized.toString(),
    isVisible: data.isSterilized.toString(),
    months: data.months,
    animalCategory: data.animalCategory as GenreType,
    species: data.species,
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
          formik.setFieldValue("photos", [...photos, ...newData]);
          console.log(formik.values.photos);
          const { newPhotos, ...values } = formik.values;
          putShelterCardsFn(
            {
              ...values,
              petId: data.id,
              isSterilized: JSON.parse(values.isSterilized),
              isVisible: JSON.parse(values.isVisible),
              photos: [...values.photos, ...newData],
              profilePhoto: values.photos[0] || values.profilePhoto,
            } as UpdatePet,
            {
              onSuccess: () => {
                toastService.showToast(
                  `Karta zwierzęcia o imieniu ${formik.values.name} została zaktualizowana`,
                  "success"
                );

                formik.setFieldValue("newPhotos", []);

                queryClient.invalidateQueries({
                  queryKey: ["shelterCardsCard", data.id],
                });
                queryClient.invalidateQueries({
                  queryKey: ["storageImages", data.id],
                });
              },
            }
          );
        },
      });
    } else {
      const { newPhotos, ...values } = formik.values;
      putShelterCardsFn(
        {
          ...values,
          petId: data.id,
          isSterilized: JSON.parse(values.isSterilized),
          isVisible: JSON.parse(values.isVisible),
          profilePhoto: values.photos[0] || values.profilePhoto,
        } as UpdatePet,
        {
          onSuccess: () => {
            toastService.showToast(
              `Karta zwierzęcia o imieniu ${formik.values.name} została zaktualizowana`,
              "success"
            );

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
        setLocalImageUrls((urls) => {
          const activeIndex = urls.indexOf(String(active.id));
          const overIndex = urls.indexOf(String(over.id));

          const updatedPhotos = arrayMove(photos, activeIndex, overIndex);
          const updatedUrls = arrayMove(localImageUrls, activeIndex, overIndex);
          formik.setFieldValue("photos", updatedPhotos);

          return updatedUrls;
        });
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
    if (GetStorageImagesIsSuccess && imagesUrls) {
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
            items={localImageUrls}
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
              description="Zdjęcie maksymalnie 15MB, a zwierzak może posiadać maksymalnie 5 zdjęć."
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
