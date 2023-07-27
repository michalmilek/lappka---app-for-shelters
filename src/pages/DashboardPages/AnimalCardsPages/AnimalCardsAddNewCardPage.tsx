import AnimalCardsAddNewCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm";
import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export interface AddNewAnimalCardInterface {
  animalName: string;
  description: string;
  genre: {
    label: "Pies" | "Kot" | "";
    value: "pies" | "kot" | "";
  };
  sex: {
    label: "Samiec" | "Samiczka" | "";
    value: "samiec" | "samiczka" | "";
  };
  colour: { label: "Jasny" | "Ciemny" | ""; value: "jasny" | "ciemny" | "" };
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
    animalName: "",
    description: "",
    genre: { label: "", value: "" },
    sex: { label: "", value: "" },
    colour: { label: "", value: "" },
    weight: undefined,
    uploadFile: [],
    sterilisation: { label: "", value: "" },
    visibility: { label: "", value: "" },
  };

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        previousTitle="Karty zwierząt / "
        title="Nowa karta"
      />
      <StyledDashboardAddNewCardMainContent>
        <AnimalCardsAddNewCardForm formik={formik} />
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsAddNewCardPage;
