import { AnimalEdit, Pet } from "services/pet/pet";
import { GenderType, GenreType, PetBreed } from "services/pet/petTypes";
import { useFormik } from "formik";
import React from "react";
import {
  StyledCardFooter,
  StyledCardFormContentContainer,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardInputContainer,
  StyledCardSingleImgContainer,
} from "./DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import * as Yup from "yup";
import { BreedArray } from "pages/DashboardPages/AnimalCardsPages/AnimalCardsUtils";
import { StyledCloseIcon } from "components/SharedComponents/Inputs/CustomFileInput.styled";
import { useDeleteStorageImage } from "services/storage/storageServices";
import { useQueryClient } from "@tanstack/react-query";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Button from "components/SharedComponents/Button/Button";
import useDeviceType from "hooks/useDeviceType";
import { useNavigate } from "react-router-dom";
import { usePutShelterCardsAnimal } from "services/pet/petServices";
import DashboardAnimalCardsCardFields from "./DashboardAnimalCardsCardFields";

export interface PetCard {
  name: string;
  description: string;
  type: GenreType | "";
  gender: GenderType | "";
  color: string;
  months: number;
  weight: number;
  breed: PetBreed | "";
  photos: string[];
  profilePhoto: string;
  isSterilized: boolean | "";
  isVisible: boolean | "";
  newPhotos?: File[];
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("To pole jest wymagane"),
  description: Yup.string().required("To pole jest wymagane"),
  type: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  breed: Yup.string().when("type", {
    is: (type: string) => type === "Dog" || type === "Cat",
    then: () =>
      Yup.string()
        .oneOf(BreedArray, "Nieprawidłowy wybór")
        .required("To pole jest wymagane"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  color: Yup.string().required("To pole jest wymagane"),
  months: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  weight: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  isSterilized: Yup.bool()
    .oneOf([true, false], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  isVisible: Yup.bool()
    .oneOf([true, false], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
});

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: Pet;
}) => {
  const { mutate } = usePutShelterCardsAnimal();
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const initialValues: PetCard = {
    description: data.description,
    name: data.name,
    profilePhoto: data.profilePhoto,
    photos: data.photos,
    isSterilized: data.isSterilized,
    weight: data.weight,
    months: data.age,
    gender: data.gender,
    isVisible: data.isVisible,
    color: data.color,
    type: data.type as GenreType,
    breed: data.breed as PetBreed,
  };

  const handleSubmit = async (values: PetCard) => {
    try {
      console.log(values);
      //await mutateAsync(formik.values.photos[0]);
      if (isSuccess) {
        //formik.setFieldValue("photos", [...data, newData]);
        mutate({
          petId: data.id,
          name: formik.values.name,
          profilePhoto: formik.values.photos[0],
          gender: formik.values.gender,
          description: formik.values.description,
          isVisible: formik.values.isVisible,
          months: formik.values.months,
          isSterilized: formik.values.isSterilized,
          weight: formik.values.weight,
          photos: formik.values.photos,
          color: formik.values.color,
          breed: formik.values.breed,
        } as AnimalEdit);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const queryClient = useQueryClient();
  const { mutateAsync: deleteImageFn, isSuccess } = useDeleteStorageImage();

  return (
    <StyledCardFormContentContainer onSubmit={formik.handleSubmit}>
      <StyledCardImgContainer>
        {data.photos.map((photo, index) => (
          <StyledCardSingleImgContainer key={photo + index}>
            <StyledCardImg
              src={photo}
              alt={`gallery photo nr${index} `}
            />
            {isEditOn && (
              <StyledCloseIcon
                onClick={async () => {
                  try {
                    await deleteImageFn(photo);
                    if (isSuccess) {
                      queryClient.invalidateQueries({
                        queryKey: ["shelterCardsCard", data.id],
                      });
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}
              />
            )}
          </StyledCardSingleImgContainer>
        ))}
      </StyledCardImgContainer>
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
            size={deviceType === "desktop" ? "Large" : "Medium"}
            variant="outline">
            Anuluj
          </Button>
          <Button
            onClick={() => {}}
            size={deviceType === "desktop" ? "Large" : "Medium"}>
            Zapisz
          </Button>
        </StyledCardFooter>
      )}
    </StyledCardFormContentContainer>
  );
};

export default DashboardAnimalCardsCardForm;
