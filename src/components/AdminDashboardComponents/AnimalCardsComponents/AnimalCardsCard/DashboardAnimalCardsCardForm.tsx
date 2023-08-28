import { AnimalEdit, GenreType, Pet, PetBreed } from "services/pet/petTypes";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  AnimalCardsCardBtnsContainer,
  StyledCardFooter,
  StyledCardFormContentContainer,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardInputContainer,
  StyledCardSingleImgContainer,
} from "./utils/DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import {
  StyledCloseIcon,
  StyledProfileIcon,
} from "components/SharedComponents/Inputs/CustomFileInput.styled";
import {
  useDeleteStorageImage,
  useDeleteStorageImages,
  usePostStoragePictures,
} from "services/storage/storageServices";
import { useQueryClient } from "@tanstack/react-query";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { usePutShelterCardsAnimal } from "services/pet/petServices";
import DashboardAnimalCardsCardFields from "./DashboardAnimalCardsCardFields";
import useToast from "hooks/useToast";
import { setLoading } from "redux/loadingSlice";
import { useDispatch } from "react-redux";
import Modal from "components/SharedComponents/Modal/Modal";
import Typography from "components/SharedComponents/Typography/Typography";
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
import SortableItem from "components/SharedComponents/DragAndDrop/SortableItem";
import PhotoPreviewImage from "components/SharedComponents/DragAndDrop/PhotoPreviewImage";

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: Pet;
}) => {
  const { showToast } = useToast();
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const { mutate: deleteStorageImagesFn } = useDeleteStorageImages();
  const {
    mutate: postStoragePicture,
    isLoading: isLoadingPostStoragePictures,
  } = usePostStoragePictures();
  const { mutate: putShelterCardsFn, isLoading: isLoadingPutShelterCards } =
    usePutShelterCardsAnimal();
  const navigate = useNavigate();
  const initialValues: PetCard = {
    ...data,
    months: data.age,
    type: data.type as GenreType,
    breed: data.breed as PetBreed,
  };

  const handleOnFileDelete = (index: number) => {
    const photoList = [...photos];
    photoList.splice(index, 1);

    formik.setFieldValue("photos", photoList);
  };

  const handleSubmit = () => {
    if (formik.values.newPhotos)
      postStoragePicture(formik.values.newPhotos, {
        onSuccess: (newData) => {
          formik.setFieldValue("photos", [...photos, newData]);
          const { newPhotos, ...values } = formik.values;
          putShelterCardsFn(
            {
              ...values,
              petId: data.id,
              profilePhoto: data.profilePhoto,
            } as AnimalEdit,
            {
              onSuccess: () => {
                showToast(
                  `Karta zwierzęcia o imieniu ${formik.values.name} została zaktualizowana`,
                  "success"
                );
              },
            }
          );
        },
      });
    else {
      const { newPhotos, ...values } = formik.values;
      putShelterCardsFn({
        ...values,
        petId: data.id,
      } as AnimalEdit);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AnimalCardsCardValidationSchema,
    onSubmit: handleSubmit,
  });

  const photos = formik.values.photos;
  const photosLength = formik.values.photos.length;

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isLoadingPostStoragePictures || isLoadingPutShelterCards)
      dispatch(setLoading(true));
    else dispatch(setLoading(false));
  }, [dispatch, isLoadingPostStoragePictures, isLoadingPutShelterCards]);

  return (
    <StyledCardFormContentContainer
      isEditOn={isEditOn}
      onSubmit={formik.handleSubmit}>
      {!isEditOn && <AnimalCardsCardActions id={data.id} />}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}>
        <SortableContext
          items={photos}
          strategy={horizontalListSortingStrategy}>
          <StyledCardImgContainer>
            {photos.map((photo, index) => (
              <PhotoPreviewImage
                id={data.id}
                index={index}
                key={photo + index}
                isEditOn={isEditOn}
                photo={photo}
              />
            ))}
          </StyledCardImgContainer>
          {data.photos && isEditOn && (
            <>
              <Button
                type="button"
                onClick={() => setIsDeleteAllModalOpen(true)}>
                Usuń wszystkie zdjęcia
              </Button>
              <Modal isOpen={isDeleteAllModalOpen}>
                <Typography
                  variant="Heading 18 Semi Bold"
                  tag="h3">
                  Czy chcesz usunąć wszystkie zdjęcia z karty?
                </Typography>
                <AnimalCardsCardBtnsContainer>
                  <Button
                    isFullWidth
                    variant="outline"
                    onClick={() => setIsDeleteAllModalOpen(false)}
                    type="button">
                    Anuluj
                  </Button>
                  <Button
                    isFullWidth
                    onClick={() => {
                      deleteStorageImagesFn(data.photos, {
                        onSuccess: () => {
                          setIsDeleteAllModalOpen(false);
                          queryClient.invalidateQueries({
                            queryKey: ["shelterCardsCard", data.id],
                          });
                        },
                      });
                    }}
                    type="button">
                    Potwierdź
                  </Button>
                </AnimalCardsCardBtnsContainer>
              </Modal>
            </>
          )}
        </SortableContext>
      </DndContext>

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
              description="Zdjęcie maksymalnie 5MB"
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
          <Button onClick={() => {}}>Zapisz</Button>
        </StyledCardFooter>
      )}
    </StyledCardFormContentContainer>
  );
};

export default DashboardAnimalCardsCardForm;
