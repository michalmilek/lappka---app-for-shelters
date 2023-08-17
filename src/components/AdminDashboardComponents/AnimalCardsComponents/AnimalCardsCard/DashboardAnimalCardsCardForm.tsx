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
import { StyledCloseIcon } from "components/SharedComponents/Inputs/CustomFileInput.styled";
import {
  useDeleteStorageImage,
  useDeleteStorageImages,
  usePostStoragePictures,
} from "services/storage/storageServices";
import { useQueryClient } from "@tanstack/react-query";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import useDeviceType from "hooks/useDeviceType";
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
  const { mutate: deleteImageFn, isLoading: isLoadingDeleteStorageImage } =
    useDeleteStorageImage();
  const {
    mutate: postStoragePicture,
    isLoading: isLoadingPostStoragePictures,
  } = usePostStoragePictures();
  const { mutate: putShelterCardsFn, isLoading: isLoadingPutShelterCards } =
    usePutShelterCardsAnimal();
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const initialValues: PetCard = {
    ...data,
    months: data.age,
    type: data.type as GenreType,
    breed: data.breed as PetBreed,
  };

  const handleSubmit = () => {
    if (formik.values.newPhotos)
      postStoragePicture(formik.values.newPhotos, {
        onSuccess: (newData) => {
          formik.setFieldValue("photos", [...formik.values.photos, newData]);
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

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      isLoadingDeleteStorageImage ||
      isLoadingPostStoragePictures ||
      isLoadingPutShelterCards
    )
      dispatch(setLoading(true));
    else dispatch(setLoading(false));
  }, [
    dispatch,
    isLoadingDeleteStorageImage,
    isLoadingPostStoragePictures,
    isLoadingPutShelterCards,
  ]);

  return (
    <StyledCardFormContentContainer onSubmit={formik.handleSubmit}>
      {!isEditOn && <AnimalCardsCardActions id={data.id} />}
      <StyledCardImgContainer>
        {data.photos.map((photo, index) => (
          <StyledCardSingleImgContainer key={photo + index}>
            <StyledCardImg
              src={photo}
              alt={`gallery photo nr${index} `}
            />
            {isEditOn && (
              <StyledCloseIcon
                onClick={() => {
                  deleteImageFn(photo, {
                    onSuccess: () => {
                      showToast(
                        `Zdjęcie nr${index + 1} usunięte pomyślnie`,
                        "success"
                      );
                      queryClient.invalidateQueries({
                        queryKey: ["shelterCardsCard", data.id],
                      });
                    },
                  });
                }}
              />
            )}
          </StyledCardSingleImgContainer>
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
      <StyledCardInputContainer>
        <DashboardAnimalCardsCardFields
          isEditOn={isEditOn}
          formik={formik}
        />

        {isEditOn && (
          <FormRow label="Dodaj nowe zdjęcia">
            <CustomFileInput
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
