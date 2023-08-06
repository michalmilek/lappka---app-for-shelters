import { BreedOption } from "apiCalls/pet/petTypes";
import Button from "components/SharedComponents/Button/Button";
import Select from "components/SharedComponents/DropdownMenu/Select";
import SelectSecond from "components/SharedComponents/DropdownMenu/SelectSecond";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import CustomFileInput from "components/SharedComponents/Inputs/CustomFileInput";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikProps } from "formik";
import useDeviceType from "hooks/useDeviceType";
import { AddNewAnimalCardInterface } from "pages/DashboardPages/AnimalCardsPages/AnimalCardsAddNewCardPage";
import { PetsBreeds } from "./AddNewCardUtils";
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

  const prevFiles = formik.values.photos;

  const handleOnFileChange = (files: File[] | null | File) => {
    formik.setFieldValue("photos", [...prevFiles, files]);
  };

  console.log(formik.errors.breed);

  return (
    <AnimalCardsAddNewCardFormContainer onSubmit={formik.handleSubmit}>
      <AnimalCardsAddNewCardFormInputContainer>
        <Input
          error={
            formik.errors.name && formik.touched.name
              ? formik.errors.name
              : undefined
          }
          placeholder="Wpisz"
          inputSize="Large"
          label="Imię zwierzaka"
          name="name"
          value={formik.values.name}
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
        <SelectSecond
          zIndex={1301}
          error={
            formik.errors.type && formik.touched.type
              ? formik.errors.type
              : undefined
          }
          label="Gatunek"
          dropdownIcon={<ArrowDownIcon />}
          options={[
            { value: "Dog", label: "Pies" },
            { value: "Cat", label: "Kot" },
            { value: "Other", label: "Inny" },
          ]}
          value={formik.values.type}
          handleChange={(option) => {
            formik.setFieldTouched("type", true);
            formik.setFieldValue("type", option);
          }}
        />
        {(formik.values.type === "Dog" || formik.values.type === "Cat") && (
          <SelectSecond
            zIndex={1300}
            error={
              formik.errors.breed && formik.touched.breed
                ? formik.errors.breed
                : undefined
            }
            label="Rasa"
            dropdownIcon={<ArrowDownIcon />}
            options={
              formik.values.type === "Dog"
                ? PetsBreeds.dogsBreeds
                : PetsBreeds.catBreeds
            }
            value={formik.values.breed}
            handleChange={(option) => {
              formik.setFieldTouched("breed", true);
              formik.setFieldValue("breed", option);
            }}
          />
        )}
        <AnimalCardsAddNewCardFlexInputContainer>
          <Input
            error={
              formik.errors.color && formik.touched.color
                ? formik.errors.color
                : undefined
            }
            placeholder="Wpisz"
            inputSize="Large"
            label="Umaszczenie"
            name="color"
            value={formik.values.color}
            onChange={formik.handleChange}
          />
          <InputNumberWithUnits
            label="Wiek"
            placeholder="Miesiące"
            name="months"
            unit="msc"
            error={
              formik.errors.months && formik.touched.months
                ? formik.errors.months
                : undefined
            }
            value={formik.values.months}
            onChange={formik.handleChange}
          />
        </AnimalCardsAddNewCardFlexInputContainer>

        <AnimalCardsAddNewCardFlexInputContainer>
          <SelectSecond
            zIndex={1299}
            error={
              formik.errors.gender && formik.touched.gender
                ? formik.errors.gender
                : undefined
            }
            label="Płeć"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: "Male", label: "Samiec" },
              { value: "Female", label: "Samiczka" },
              { value: "Other", label: "Inna" },
            ]}
            value={formik.values.gender}
            handleChange={(option) => {
              formik.setFieldTouched("gender", true);
              formik.setFieldValue("gender", option);
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
          <SelectSecond
            zIndex={1298}
            error={
              formik.errors.isSterilized && formik.touched.isSterilized
                ? formik.errors.isSterilized
                : undefined
            }
            label="Sterylizacja"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: true, label: "Tak" },
              { value: false, label: "Nie" },
            ]}
            value={formik.values.isSterilized}
            handleChange={(option) => {
              formik.setFieldTouched("isSterilized", true);
              formik.setFieldValue("isSterilized", option);
            }}
          />
          <SelectSecond
            zIndex={1298}
            error={
              formik.errors.isVisible && formik.touched.isVisible
                ? formik.errors.isVisible
                : undefined
            }
            label="Widoczność"
            dropdownIcon={<ArrowDownIcon />}
            options={[
              { value: true, label: "Tak" },
              { value: false, label: "Nie" },
            ]}
            value={formik.values.isVisible}
            handleChange={(option) => {
              formik.setFieldTouched("isVisible", true);
              formik.setFieldValue("isVisible", option);
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
