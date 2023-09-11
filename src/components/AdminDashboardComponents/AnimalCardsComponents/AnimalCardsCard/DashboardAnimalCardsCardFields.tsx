import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikProps } from "formik";
import React from "react";
import { ageConversion, genderLabels, typeValueToLabel } from "utils/appUtils";
import { AnimalCardsCardFlexInputContainer } from "./utils/DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import { PetCard } from "./utils/DashboardAnimalCardsUtils";
import { GenderType, GenreType } from "services/pet/petTypes";
import SecondSelect from "components/SharedComponents/DropdownMenu/SecondSelect";

interface DashboardAnimalCardsCardFieldsProps {
  isEditOn: boolean;
  formik: FormikProps<PetCard>;
}

const DashboardAnimalCardsCardFields: React.FC<
  DashboardAnimalCardsCardFieldsProps
> = ({ isEditOn, formik }) => {
  return (
    <>
      <FormRow label="Imię zwierzaka">
        <Input
          id="name"
          name="name"
          value={formik.values.name}
          readOnly={!isEditOn}
          onChange={formik.handleChange}
          inputSize="Large"
        />
      </FormRow>
      <FormRow label="Opis">
        {!isEditOn ? (
          <Input
            value={formik.values.description}
            readOnly={!isEditOn}
            inputSize="Large"
          />
        ) : (
          <Textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            inputSize="Large"
          />
        )}
      </FormRow>
      <FormRow label="Płeć">
        {!isEditOn ? (
          <Input
            readOnly
            inputSize="Large"
            value={genderLabels[formik.values.gender as GenderType]}
          />
        ) : (
          <SecondSelect
            label=""
            options={[
              { label: "Samiec", value: "Male" },
              { label: "Samiczka", value: "Female" },
              { label: "Inna", value: "Other" },
            ]}
            value={formik.values.gender}
            handleChange={(option) => {
              formik.setFieldTouched("gender", true);
              formik.setFieldValue("gender", option);
            }}
          />
        )}
      </FormRow>
      <FormRow label="Gatunek">
        {!isEditOn ? (
          <Input
            readOnly
            error={
              formik.errors.animalCategory && formik.touched.animalCategory
                ? formik.errors.animalCategory
                : undefined
            }
            placeholder="Wpisz"
            inputSize="Large"
            name="animalCategory"
            value={typeValueToLabel(formik.values.animalCategory as GenreType)}
            onChange={formik.handleChange}
          />
        ) : (
          <SecondSelect
            label=""
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
        )}
      </FormRow>
      {formik.values.animalCategory !== "Other" && (
        <FormRow label="Rasa">
          <Input
            id="species"
            name="species"
            readOnly={!isEditOn}
            inputSize="Large"
            onChange={formik.handleChange}
            value={formik.values.species}
          />
        </FormRow>
      )}
      <FormRow label="Waga">
        {!isEditOn ? (
          <Input
            readOnly
            inputSize="Large"
            value={formik.values.weight + "kg"}
          />
        ) : (
          <InputNumberWithUnits
            id="weight"
            name="weight"
            value={formik.values.weight}
            onChange={formik.handleChange}
            unit="KG"
          />
        )}
      </FormRow>
      <FormRow label="Wiek">
        {!isEditOn ? (
          <Input
            readOnly
            inputSize="Large"
            value={ageConversion(formik.values.months)}
          />
        ) : (
          <InputNumberWithUnits
            id="months"
            name="months"
            value={formik.values.months}
            onChange={formik.handleChange}
            unit="msc"
          />
        )}
      </FormRow>
      <AnimalCardsCardFlexInputContainer>
        <FormRow label="Sterylizacja">
          {!isEditOn ? (
            <Input
              readOnly
              inputSize="Large"
              value={formik.values.isSterilized === "true" ? "Tak" : "Nie"}
            />
          ) : (
            <SecondSelect
              label=""
              options={[
                { label: "Tak", value: "true" },
                { label: "Nie", value: "false" },
              ]}
              value={formik.values.isSterilized}
              handleChange={(option) => {
                formik.setFieldTouched("isSterilized", true);
                formik.setFieldValue("isSterilized", option);
              }}
            />
          )}
        </FormRow>
        <FormRow label="Widoczność">
          {!isEditOn ? (
            <Input
              readOnly
              inputSize="Large"
              value={formik.values.isSterilized === "true" ? "Tak" : "Nie"}
            />
          ) : (
            <SecondSelect
              label=""
              options={[
                { label: "Tak", value: "true" },
                { label: "Nie", value: "false" },
              ]}
              value={formik.values.isVisible ? "true" : "false"}
              handleChange={(option) => {
                formik.setFieldTouched("isVisible", true);
                formik.setFieldValue("isVisible", option);
              }}
            />
          )}
        </FormRow>
      </AnimalCardsCardFlexInputContainer>
    </>
  );
};

export default DashboardAnimalCardsCardFields;
