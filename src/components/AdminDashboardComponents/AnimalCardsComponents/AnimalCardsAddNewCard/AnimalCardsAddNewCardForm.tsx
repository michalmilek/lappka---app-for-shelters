import Button from "components/SharedComponents/Button/Button";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import CustomFileInput from "components/SharedComponents/FileInput/CustomFileInput";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { AddNewAnimalCardInterface } from "./AddNewCardUtils";
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
  const navigate = useNavigate();
  const prevFiles = formik.values.photos;

  const handleOnFileChange = (files: File[] | null | File) => {
    formik.setFieldValue("photos", [...prevFiles, files]);
  };

  const handleOnFileDelete = (index: number) => {
    const photoList = [...formik.values.photos];
    photoList.splice(index, 1);

    formik.setFieldValue("photos", photoList);
  };

  const handleIndexFileChangeForm = (files: File[]) => {
    formik.setFieldValue("photos", files);
  };

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
        <Select
          error={
            formik.errors.animalCategory && formik.touched.animalCategory
              ? formik.errors.animalCategory
              : undefined
          }
          label="Gatunek"
          dropdownIcon={<ArrowDownIcon />}
          options={[
            { value: "Dog", label: "Pies" },
            { value: "Cat", label: "Kot" },
            { value: "Other", label: "Inny" },
          ]}
          value={formik.values.animalCategory}
          handleChange={(option) => {
            formik.setFieldTouched("animalCategory", true);
            formik.setFieldValue("animalCategory", option);
          }}
        />
        {(formik.values.animalCategory === "Dog" ||
          formik.values.animalCategory === "Cat") && (
          <Input
            error={
              formik.errors.species && formik.touched.species
                ? formik.errors.species
                : undefined
            }
            label="Rasa"
            placeholder="Wpisz"
            inputSize="Large"
            name="species"
            value={formik.values.species}
            onChange={formik.handleChange}
          />
        )}
        <AnimalCardsAddNewCardFlexInputContainer>
          <Input
            error={
              formik.errors.marking && formik.touched.marking
                ? formik.errors.marking
                : undefined
            }
            placeholder="Wpisz"
            inputSize="Large"
            label="Umaszczenie"
            name="marking"
            value={formik.values.marking}
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
          <Select
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
          <Select
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
          <Select
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
          isAddNewCard
          photos={formik.values.photos}
          handleIndexFileChangeForm={handleIndexFileChangeForm}
          onFileDelete={handleOnFileDelete}
          onFileChange={handleOnFileChange}
          label="Dodaj zdjęcia"
          description="Zdjęcie maksymalnie 15MB, a maksymalna ilość zdjęć to 5."
        />
      </AnimalCardsAddNewCardFormInputContainer>
      <AnimalCardsAddNewCardFooter>
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            navigate(-1);
          }}>
          Anuluj
        </Button>
        <Button type="submit">Zapisz</Button>
      </AnimalCardsAddNewCardFooter>
    </AnimalCardsAddNewCardFormContainer>
  );
};

export default AnimalCardsAddNewCardForm;
