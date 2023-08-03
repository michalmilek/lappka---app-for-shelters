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
import {
  AnimalCardsAddNewCardFlexInputContainer,
  AnimalCardsAddNewCardFooter,
  AnimalCardsAddNewCardFormContainer,
  AnimalCardsAddNewCardFormInputContainer,
} from "./AnimalCardsAddNewCardForm.styled";
import { useCallback } from "react";

const AnimalCardsAddNewCardForm = ({
  formik,
}: {
  formik: FormikProps<AddNewAnimalCardInterface>;
}) => {
  const deviceType = useDeviceType();

  const prevFiles = formik.values.uploadFile;

  const handleOnFileChange = (files: File[] | null | File) => {
    formik.setFieldValue("uploadFile", [...prevFiles, files]);
  };

  console.log("formik:", formik.values.uploadFile);

  return (
    <AnimalCardsAddNewCardFormContainer onSubmit={formik.handleSubmit}>
      <AnimalCardsAddNewCardFormInputContainer>
        <Input
          error={
            formik.errors.animalName && formik.touched.animalName
              ? formik.errors.animalName
              : undefined
          }
          placeholder="Wpisz"
          inputSize="Large"
          label="Imię zwierzaka"
          name="animalName"
          value={formik.values.animalName}
          onChange={formik.handleChange}
        />
        <Textarea
          error={
            formik.errors.description && formik.touched.description
              ? formik.errors.description
              : undefined
          }
          placeholder="Wpisz"
          inputSize="Large"
          label="Opis"
          aria-placeholder="Wpisz opis zwierzaka"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Select
          error={
            formik.errors.genre?.value && formik.touched.genre
              ? formik.errors.genre?.value
              : undefined
          }
          label="Gatunek"
          dropdownIcon={<ArrowDownIcon />}
          options={[
            { value: "pies", label: "Pies" },
            { value: "kot", label: "Kot" },
          ]}
          value={formik.values.genre.value}
          handleChange={(option) => {
            formik.setFieldTouched("genre", true);
            formik.setFieldValue("genre", option);
          }}
        />
        <Select
          error={
            formik.errors.colour?.value && formik.touched.colour
              ? formik.errors.colour?.value
              : undefined
          }
          label="Umaszczenie"
          dropdownIcon={<ArrowDownIcon />}
          options={[
            { value: "jasny", label: "Jasny" },
            { value: "ciemny", label: "Ciemny" },
          ]}
          value={formik.values.colour.value}
          handleChange={(option) => {
            formik.setFieldTouched("colour", true);
            formik.setFieldValue("colour", option);
          }}
        />

        <AnimalCardsAddNewCardFlexInputContainer>
          <Select
            error={
              formik.errors.sex?.value && formik.touched.sex
                ? formik.errors.sex?.value
                : undefined
            }
            label="Płeć"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: "samiec", label: "Samiec" },
              { value: "samiczka", label: "Samiczka" },
            ]}
            value={formik.values.sex.value}
            handleChange={(option) => {
              formik.setFieldTouched("sex", true);
              formik.setFieldValue("sex", option);
            }}
          />
          <InputNumberWithUnits
            label="Waga"
            placeholder="Kilogramy"
            name="weight"
            unit="KG"
            error={
              formik.errors.weight && formik.touched.weight
                ? formik.errors.weight
                : undefined
            }
            value={formik.values.weight}
            onChange={formik.handleChange}
          />
        </AnimalCardsAddNewCardFlexInputContainer>

        <AnimalCardsAddNewCardFlexInputContainer>
          <Select
            error={
              formik.errors.sterilisation?.value && formik.touched.sterilisation
                ? formik.errors.sterilisation?.value
                : undefined
            }
            label="Sterylizacja"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: "tak", label: "Tak" },
              { value: "nie", label: "Nie" },
            ]}
            value={formik.values.sterilisation.value}
            handleChange={(option) => {
              formik.setFieldTouched("sterilisation", true);
              formik.setFieldValue("sterilisation", option);
            }}
          />
          <Select
            error={
              formik.errors.visibility?.value && formik.touched.visibility
                ? formik.errors.visibility?.value
                : undefined
            }
            label="Widoczność"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: "tak", label: "Tak" },
              { value: "nie", label: "Nie" },
            ]}
            value={formik.values.visibility.value}
            handleChange={(option) => {
              formik.setFieldTouched("visibility", true);
              formik.setFieldValue("visibility", option);
            }}
          />
        </AnimalCardsAddNewCardFlexInputContainer>
        <CustomFileInput
          onFileChange={handleOnFileChange}
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
