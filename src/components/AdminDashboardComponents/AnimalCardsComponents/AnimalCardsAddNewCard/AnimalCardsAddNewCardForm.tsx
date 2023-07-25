import Button from "components/SharedComponents/Button/Button";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikProps } from "formik";
import useDeviceType from "hooks/useDeviceType";
import { AddNewAnimalCardInterface } from "pages/DashboardPages/AnimalCardsPages/AnimalCardsAddNewCardPage";
import React from "react";
import {
  AnimalCardsAddNewCardFlexInputContainer,
  AnimalCardsAddNewCardFooter,
  AnimalCardsAddNewCardFormContainer,
  AnimalCardsAddNewCardFormInputContainer,
} from "./AnimalCardsAddNewCardForm.styled";

const AnimalCardsAddNewCardForm = ({
  formik,
}: {
  formik: FormikProps<AddNewAnimalCardInterface>;
}) => {
  const deviceType = useDeviceType();
  return (
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
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Input
          inputSize="Large"
          label="Gatunek"
          readOnly
          isSelect
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
          readOnly
          isSelect
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
            isSelect
            readOnly
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
            readOnly
            isSelect
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
            readOnly
            isSelect
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
          onFileChange={(files) => formik.setFieldValue("uploadFile", files)}
          label="Dodaj zdjęcia"
          description="Zdjęcia maksymalnie 1MB"
        />
      </AnimalCardsAddNewCardFormInputContainer>
      <AnimalCardsAddNewCardFooter>
        <Button
          variant="outline"
          type="button"
          size={deviceType === "desktop" ? "Large" : "Medium"}
          onClick={formik.handleReset}>
          Anuluj
        </Button>
        <Button
          size={deviceType === "desktop" ? "Large" : "Medium"}
          type="submit">
          Zapisz
        </Button>
      </AnimalCardsAddNewCardFooter>
    </AnimalCardsAddNewCardFormContainer>
  );
};

export default AnimalCardsAddNewCardForm;
