import Button from "components/SharedComponents/Button/Button";
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
import SecondSelect from "components/SharedComponents/DropdownMenu/SecondSelect";
import { useTranslation } from "react-i18next";

const AnimalCardsAddNewCardForm = ({
  formik,
  postStorageIsSuccess,
}: {
  formik: FormikProps<AddNewAnimalCardInterface>;
  postStorageIsSuccess: boolean;
}) => {
  const { t } = useTranslation();
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
          placeholder={t("form.input")}
          inputSize="Large"
          label={t("pet.name")}
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
          placeholder={t("form.input")}
          inputSize="Large"
          label="Opis"
          aria-placeholder="Wpisz opis zwierzaka"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <SecondSelect
          error={
            formik.errors.animalCategory && formik.touched.animalCategory
              ? formik.errors.animalCategory
              : undefined
          }
          label={t("pet.animalCategory")}
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
            placeholder={t("form.input")}
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
            placeholder={t("form.input")}
            inputSize="Large"
            label="Umaszczenie"
            name="marking"
            value={formik.values.marking}
            onChange={formik.handleChange}
          />
          <InputNumberWithUnits
            label="Wiek"
            placeholder={t("form.months")}
            name="months"
            unit={t("months.months")}
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
          <SecondSelect
            error={
              formik.errors.gender && formik.touched.gender
                ? formik.errors.gender
                : undefined
            }
            label={t("pet.gender")}
            options={[
              { value: "Male", label: t("genderType.Male") },
              { value: "Female", label: t("genderType.Female") },
              { value: "Other", label: t("genderType.Other") },
            ]}
            handleChange={(option) => {
              formik.setFieldTouched("gender", true);
              formik.setFieldValue("gender", option);
            }}
          />
          <InputNumberWithUnits
            label={t("pet.weight")}
            placeholder={t("form.kgs")}
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
          <SecondSelect
            error={
              formik.errors.isSterilized && formik.touched.isSterilized
                ? formik.errors.isSterilized
                : undefined
            }
            label={t("form.sterilisation")}
            options={[
              { value: "true", label: t("form.yes") },
              { value: "false", label: t("form.no") },
            ]}
            handleChange={(option) => {
              formik.setFieldTouched("isSterilized", true);
              formik.setFieldValue("isSterilized", option);
            }}
          />
          <SecondSelect
            error={
              formik.errors.isVisible && formik.touched.isVisible
                ? formik.errors.isVisible
                : undefined
            }
            label={t("form.visible")}
            options={[
              { value: "true", label: t("form.yes") },
              { value: "false", label: t("form.no") },
            ]}
            handleChange={(option) => {
              formik.setFieldTouched("isVisible", true);
              formik.setFieldValue("isVisible", option);
            }}
          />
        </AnimalCardsAddNewCardFlexInputContainer>
        <CustomFileInput
          isUploadSuccess={postStorageIsSuccess}
          isAddNewCard
          photos={formik.values.photos}
          handleIndexFileChangeForm={handleIndexFileChangeForm}
          onFileDelete={handleOnFileDelete}
          onFileChange={handleOnFileChange}
          label={t("addNewCard.addPhotos")}
          description={t("addNewCard.addPhotosDesc")}
        />
      </AnimalCardsAddNewCardFormInputContainer>
      <AnimalCardsAddNewCardFooter>
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            navigate(-1);
          }}>
          {t("buttons.cancel")}
        </Button>
        <Button type="submit">{t("buttons.save")}</Button>
      </AnimalCardsAddNewCardFooter>
    </AnimalCardsAddNewCardFormContainer>
  );
};

export default AnimalCardsAddNewCardForm;
