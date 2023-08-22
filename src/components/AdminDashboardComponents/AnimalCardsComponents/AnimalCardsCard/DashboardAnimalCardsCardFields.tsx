import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikContextType } from "formik";
import React from "react";
import { ageConversion } from "utils/appUtils";
import { AnimalCardsCardFlexInputContainer } from "./utils/DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";
import { PetCard } from "./utils/DashboardAnimalCardsUtils";

interface DashboardAnimalCardsCardFieldsProps {
  isEditOn: boolean;
  formik: FormikContextType<PetCard>;
}

const DashboardAnimalCardsCardFields: React.FC<
  DashboardAnimalCardsCardFieldsProps
> = ({ isEditOn, formik }) => {
  return (
    <>
      <FormRow label="Imię zwierzaka">
        <Input
          value={formik.values.name}
          readOnly={!isEditOn}
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
            value={formik.values.description}
            readOnly={!isEditOn}
            inputSize="Large"
          />
        )}
      </FormRow>
      <FormRow label="Płeć">
        {!isEditOn ? (
          <Input
            readOnly
            inputSize="Large"
            value={formik.values.gender}
          />
        ) : (
          <Select
            label=""
            options={[
              { label: "Samiec", value: "Male" },
              { label: "Samiczka", value: "Female" },
              { label: "Inna", value: "Other" },
            ]}
            dropdownIcon={<ArrowDownIcon />}
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
              formik.errors.breed && formik.touched.breed
                ? formik.errors.breed
                : undefined
            }
            placeholder="Wpisz"
            inputSize="Large"
            name="breed"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
        ) : (
          <Select
            label=""
            options={[
              { value: "Dog", label: "Pies" },
              { value: "Cat", label: "Kot" },
              { value: "Other", label: "Inny" },
            ]}
            dropdownIcon={<ArrowDownIcon />}
            value={formik.values.type}
            handleChange={(option) => {
              formik.setFieldTouched("type", true);
              formik.setFieldValue("type", option);
            }}
          />
        )}
      </FormRow>
      {formik.values.type !== "Other" && (
        <FormRow label="Rasa">
          <Input
            readOnly={!isEditOn}
            inputSize="Large"
            value={formik.values.breed}
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
            value={formik.values.weight}
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
            value={formik.values.months}
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
              value={formik.values.isSterilized ? "Tak" : "Nie"}
            />
          ) : (
            <Select
              label=""
              options={[
                { label: "Tak", value: true },
                { label: "Nie", value: false },
              ]}
              dropdownIcon={<ArrowDownIcon />}
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
              value={formik.values.isVisible ? "Tak" : "Nie"}
            />
          ) : (
            <Select
              label=""
              options={[
                { label: "Tak", value: true },
                { label: "Nie", value: false },
              ]}
              dropdownIcon={<ArrowDownIcon />}
              value={formik.values.isVisible ? true : false}
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
