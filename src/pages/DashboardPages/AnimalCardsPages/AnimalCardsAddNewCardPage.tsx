import { Animal, Cat, Dog, Other } from "apiCalls/pet/pet";
import {
  usePostShelterCardsAnimal,
  usePostShelterCardsCat,
  usePostShelterCardsDog,
  usePostShelterCardsOther,
} from "apiCalls/pet/petHooks";
import {
  GenderType,
  GenreType,
  PetBreed,
  PetBreedLabel,
} from "apiCalls/pet/petTypes";
import { usePostStoragePicture } from "apiCalls/storage/storageHooks";
import AnimalCardsAddNewCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm";
import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { BreedArray } from "./AnimalCardsUtils";

export interface AddNewAnimalCardInterface {
  name: string;
  description: string;
  type: GenreType | "";
  gender: GenderType | "";
  color: string;
  months: number | undefined;
  weight: number | undefined;
  breed: PetBreed | "";
  photos: File[] | string[];
  profilePhoto: string;
  isSterilized: boolean | "";
  isVisible: boolean | "";
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

const AnimalCardsAddNewCardPage = () => {
  const initialValues: AddNewAnimalCardInterface = {
    name: "",
    description: "",
    type: "",
    gender: "",
    color: "",
    months: undefined,
    weight: undefined,
    photos: [],
    isSterilized: "",
    isVisible: "",
    profilePhoto: "",
    breed: "",
  };

  const { isLoading, isError, isSuccess, mutate, data, mutateAsync } =
    usePostStoragePicture();
  const {
    isLoading: isLoadingAnimal,
    isError: isErrorAnimal,
    isSuccess: isSuccessAnimal,
    mutate: postAnimalFn,
    mutateAsync: postAnimalFnAsync,
  } = usePostShelterCardsAnimal();

  const onSubmit = async (values: AddNewAnimalCardInterface) => {
    try {
      console.log(values);
      if (formik.values.photos[0] instanceof File) {
        await mutateAsync(formik.values.photos[0]);
        if (isSuccess) {
          formik.setFieldValue("photos", data);
          postAnimalFn(values as Animal);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        previousTitle="Karty zwierząt / "
        title="Nowa karta"
        Button={
          <Button
            onClick={() => navigate(-1)}
            variant="outline">
            Anuluj
          </Button>
        }
      />
      <StyledDashboardAddNewCardMainContent>
        <AnimalCardsAddNewCardForm formik={formik} />
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsAddNewCardPage;
