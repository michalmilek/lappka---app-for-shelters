import { Pet } from "apiCalls/pet/pet";
import { GenderType, PetBreed } from "apiCalls/pet/petTypes";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { useFormik } from "formik";
import React from "react";
import {
  StyledCardFormContentContainer,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardInputContainer,
} from "./DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";

interface PetCard {
  description: string;
  petName: string;
  profilePhoto: string;
  isSterilized: boolean;
  weight: number;
  months: number;
  gender: GenderType;
  photos: string[] | string | File | File[];
  isVisible: boolean;
  color?: string;
  breed?: PetBreed;
}

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  data,
}: {
  isEditOn: boolean;
  data: Pet;
}) => {
  const initialValues = {
    description: data.description,
    petName: data.name,
    profilePhoto: data.profilePhoto,
    photos: data.photos,
    isSterilized: data.isSterilized,
    weight: data.weight,
    months: data.age,
    gender: data.gender,
    isVisible: data.isVisible,
  };

  const handleSubmit = (values: PetCard) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <StyledCardFormContentContainer onSubmit={formik.handleSubmit}>
      <StyledCardImgContainer>
        {data.photos.map((photo, index) => (
          <StyledCardImg
            src={photo}
            alt={`gallery photo nr${index} `}
          />
        ))}
      </StyledCardImgContainer>

      <StyledCardInputContainer>
        <FormRow label="Imię zwierzaka">
          <Input
            value={formik.values.petName}
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
              handleChange={() => {}}
            />
          )}
        </FormRow>
        <FormRow label="Waga">
          {!isEditOn ? (
            <Input
              readOnly
              inputSize="Large"
              value={formik.values.weight + "kg"}
            />
          ) : (
            <InputNumberWithUnits unit="KG" />
          )}
        </FormRow>
        <FormRow label="Wiek">
          {!isEditOn ? (
            <Input
              readOnly
              inputSize="Large"
              value={formik.values.weight}
            />
          ) : (
            <InputNumberWithUnits unit="MSC" />
          )}
        </FormRow>
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
              handleChange={() => {}}
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
              value={formik.values.isSterilized ? true : false}
              handleChange={() => {}}
            />
          )}
        </FormRow>
      </StyledCardInputContainer>
    </StyledCardFormContentContainer>
  );
};

export default DashboardAnimalCardsCardForm;

/* 
        <FormRow label="Sterylizacja">
          <Select
            label=""
            options={[
              { label: "Tak", value: "tak" },
              { label: "Nie", value: "nie" },
            ]}
            dropdownIcon={<ArrowDownIcon />}
            value={"tak"}
            handleChange={() => {}}
          />
        </FormRow>
        <FormRow label="Widoczność">
          <Select
            label=""
            options={[
              { label: "Tak", value: "tak" },
              { label: "Nie", value: "nie" },
            ]}
            dropdownIcon={<ArrowDownIcon />}
            value={"tak"}
            handleChange={( */
