import { usePostShelterCardsCat } from "apiCalls/pet/petHooks";
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

export interface AddNewAnimalCardInterface {
  name: string;
  description: string;
  genre: {
    label: "Pies" | "Kot" | "";
    value: "pies" | "kot" | "";
  };
  sex: {
    label: "Male" | "Female" | "Other";
    value: "Male" | "Female" | "Other";
  };
  color: string;
  weight: number | undefined;
  uploadFile: File[];
  sterilisation: { label: "Tak" | "Nie" | ""; value: "tak" | "nie" | "" };
  visibility: { label: "Tak" | "Nie" | ""; value: "tak" | "nie" | "" };
}

const validationSchema = Yup.object().shape({
  animalName: Yup.string().required("To pole jest wymagane"),
  description: Yup.string().required("To pole jest wymagane"),
  genre: Yup.object().shape({
    value: Yup.string()
      .oneOf(["pies", "kot"], "Nieprawidłowy wybór")
      .required("To pole jest wymagane"),
  }),
  sex: Yup.object().shape({
    value: Yup.string()
      .oneOf(["samiec", "samiczka"], "Nieprawidłowy wybór")
      .required("To pole jest wymagane"),
  }),
  colour: Yup.object().shape({
    value: Yup.string()
      .oneOf(["jasny", "ciemny"], "Nieprawidłowy wybór")
      .required("To pole jest wymagane"),
  }),
  weight: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  sterilisation: Yup.object().shape({
    value: Yup.string()
      .oneOf(["tak", "nie"], "Nieprawidłowy wybór")
      .required("To pole jest wymagane"),
  }),
  visibility: Yup.object().shape({
    value: Yup.string()
      .oneOf(["tak", "nie"], "Nieprawidłowy wybór")
      .required("To pole jest wymagane"),
  }),
});

const AnimalCardsAddNewCardPage = () => {
  const initialValues: AddNewAnimalCardInterface = {
    name: "",
    description: "",
    type: { label: "", value: "" },
    gender: { label: "", value: "" },
    colour: { label: "", value: "" },
    weight: undefined,
    uploadFile: [],
    sterilisation: { label: "", value: "" },
    visibility: { label: "", value: "" },
  };

  const { isLoading, isError, isSuccess, mutate } = usePostStoragePicture();
  const {
    mutate: postCatFn,
    isLoading: isLoadingCat,
    isError: isErrorCat,
  } = usePostShelterCardsCat();

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    console.log(values);
    mutate(formik.values.uploadFile[0]);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      if (formik.values.genre.value === "kot") {
        postCatFn({ ...formik.values, name });
      }
    }
  });

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
