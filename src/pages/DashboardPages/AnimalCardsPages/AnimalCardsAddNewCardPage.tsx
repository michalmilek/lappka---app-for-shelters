import AnimalCardsAddNewCardForm from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm";
import { StyledDashboardAddNewCardMainContent } from "components/AdminDashboardComponents/AnimalCardsComponents/AnimalCardsAddNewCard/AnimalCardsAddNewCardForm.styled";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import { useFormik } from "formik";
import React from "react";

export interface AddNewAnimalCardInterface {
  animalName: string;
  description: string;
  genre: "Pies" | "Kot";
  sex: "Samiec" | "Samiczka";
  colour: "Jasny" | "Ciemny";
  weight: number;
  uploadFile: File[];
  sterilisation: "Tak" | "Nie";
  visibility: "Tak" | "Nie";
}

const AnimalCardsAddNewCardPage = () => {
  const initialValues: AddNewAnimalCardInterface = {
    animalName: "",
    description: "",
    genre: "Pies",
    sex: "Samiec",
    colour: "Jasny",
    weight: 0,
    uploadFile: [],
    sterilisation: "Tak",
    visibility: "Tak",
  };

  const onSubmit = (values: AddNewAnimalCardInterface) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
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
