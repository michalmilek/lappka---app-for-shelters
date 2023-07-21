import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import { StyledDashboardVoluntaryMainContent } from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import Button from "components/SharedComponents/Button/Button";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { useFormik } from "formik";
import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

interface AddNewAnimalCardInterface {
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

const StyledDashboardAddNewCardMainContent = styled.article`
  display: flex;
  width: calc(100% - 256px);
  gap: 16px;
  height: 100%;
  width: 100%;
  gap: 0;
`;

const AnimalCardsAddNewCardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 34px 24px 4px;
  background: ${getColor("white")};
  border-radius: 8px;
  width: 50%;
  height: 80%;

  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

const AnimalCardsAddNewCardFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 24px 24px;
`;

const AnimalCardsAddNewCardFlexInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const AnimalCardsAddNewCardFooter = styled.footer`
  border-top: 1px solid ${getColor("lightGray2")};
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;
`;

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
      <DashboardNavbar title="Add new card" />
      <StyledDashboardAddNewCardMainContent>
        <AnimalCardsAddNewCardFormContainer onSubmit={formik.handleSubmit}>
          <AnimalCardsAddNewCardFormInputContainer>
            <Input
              placeholder="Wpisz"
              inputSize="Large"
              label="Imię zwierzaka"
              name="animalName"
              value={formik.values.animalName}
              onChange={formik.handleChange}
            />
            <Textarea
              placeholder="Wpisz"
              inputSize="Large"
              label="Opis"
              aria-placeholder="Wpisz opis zwierzaka"
              name="animalName"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <Input
              inputSize="Large"
              label="Gatunek"
              icon={
                <Select
                  dropdownIcon={<ArrowDownIcon />}
                  options={["Pies", "Kot"]}
                  selectedOption={formik.values.genre}
                  onSelectOption={(option: string) => {
                    formik.setFieldValue("genre", option);
                  }}
                />
              }
              name="genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
            />
            <Input
              inputSize="Large"
              label="Umaszczenie"
              name="colour"
              icon={
                <Select
                  dropdownIcon={<ArrowDownIcon />}
                  options={["Jasny", "Ciemny"]}
                  selectedOption={formik.values.colour}
                  onSelectOption={(option: string) => {
                    formik.setFieldValue("colour", option);
                  }}
                />
              }
              value={formik.values.colour}
              onChange={formik.handleChange}
            />

            <AnimalCardsAddNewCardFlexInputContainer>
              <Input
                inputSize="Large"
                label="Płeć"
                name="sex"
                icon={
                  <Select
                    dropdownIcon={<ArrowDownIcon />}
                    options={["Samiec", "Samica"]}
                    selectedOption={formik.values.sex}
                    onSelectOption={(option: string) => {
                      formik.setFieldValue("sex", option);
                    }}
                  />
                }
                value={formik.values.sex}
                onChange={formik.handleChange}
              />
              <InputNumberWithUnits
                label="Waga"
                placeholder="Kilogramy"
                name="weight"
                unit="KG"
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
            </AnimalCardsAddNewCardFlexInputContainer>

            <AnimalCardsAddNewCardFlexInputContainer>
              <Input
                inputSize="Large"
                label="Sterylizacja"
                icon={
                  <Select
                    dropdownIcon={<ArrowDownIcon />}
                    options={["Tak", "Nie"]}
                    selectedOption={formik.values.sterilisation}
                    onSelectOption={(option: string) => {
                      formik.setFieldValue("sterilisation", option);
                    }}
                  />
                }
                name="sterilisation"
                value={formik.values.sterilisation}
                onChange={formik.handleChange}
              />
              <Input
                inputSize="Large"
                label="Widoczność"
                icon={
                  <Select
                    dropdownIcon={<ArrowDownIcon />}
                    options={["Tak", "Nie"]}
                    selectedOption={formik.values.visibility}
                    onSelectOption={(option: string) => {
                      formik.setFieldValue("visibility", option);
                    }}
                  />
                }
                name="visibility"
                value={formik.values.visibility}
                onChange={formik.handleChange}
              />
            </AnimalCardsAddNewCardFlexInputContainer>
            <CustomFileInput
              onFileChange={(files) =>
                formik.setFieldValue("uploadFile", files)
              }
              label="Dodaj zdjęcia"
              description="Zdjęcia maksymalnie 1MB"
            />
          </AnimalCardsAddNewCardFormInputContainer>
          <AnimalCardsAddNewCardFooter>
            <Button
              variant="outline"
              type="button"
              onClick={formik.handleReset}>
              Anuluj
            </Button>
            <Button type="submit">Zapisz</Button>
          </AnimalCardsAddNewCardFooter>
        </AnimalCardsAddNewCardFormContainer>
      </StyledDashboardAddNewCardMainContent>
    </StyledProtectedPageContent>
  );
};

export default AnimalCardsAddNewCardPage;
