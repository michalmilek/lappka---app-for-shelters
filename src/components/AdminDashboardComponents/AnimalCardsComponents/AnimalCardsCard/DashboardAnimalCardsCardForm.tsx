import { useShelterCardsCard } from "apiCalls/pet/petHooks";
import Select from "components/SharedComponents/DropdownMenu/Select";
import { ArrowDownIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import InputNumberWithUnits from "components/SharedComponents/Inputs/InputNumberWithUnits";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import React from "react";
import {
  StyledCardFormContentContainer,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardInputContainer,
} from "./DashboardAnimalCardsCard.styled";
import FormRow from "./DashboardAnimalCardsFormRow";

const DashboardAnimalCardsCardForm = ({
  isEditOn,
  id,
}: {
  isEditOn: boolean;
  id: string;
}) => {
  const { isLoading, isError, error, isSuccess, data } =
    useShelterCardsCard(id);

  if (isSuccess && data)
    return (
      <StyledCardFormContentContainer>
        <StyledCardImgContainer>
          {data?.photos.map((photo, index) => (
            <StyledCardImg
              src={photo}
              alt={`gallery photo nr${index} `}
            />
          ))}
        </StyledCardImgContainer>

        <StyledCardInputContainer>
          <FormRow label="Imię zwierzaka">
            <Input
              readOnly={!isEditOn}
              inputSize="Large"
            />
          </FormRow>
          <FormRow label="Opis">
            <Textarea
              readOnly={!isEditOn}
              inputSize="Large"
            />
          </FormRow>
          <FormRow label="Gatunek">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
              <Select
                label=""
                options={[
                  { label: "Pies", value: "pies" },
                  { label: "Kot", value: "kot" },
                  { label: "Inny", value: "inny" },
                ]}
                dropdownIcon={<ArrowDownIcon />}
                value={"pies"}
                handleChange={() => {}}
              />
            )}
          </FormRow>
          <FormRow label="Umaszczenie">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
              <Select
                label=""
                options={[
                  { label: "Jasny", value: "jasny" },
                  { label: "Ciemny", value: "ciemny" },
                ]}
                dropdownIcon={<ArrowDownIcon />}
                value={"tak"}
                handleChange={() => {}}
              />
            )}
          </FormRow>
          <FormRow label="Płeć">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
              <Select
                label=""
                options={[
                  { label: "Samiec", value: "samiec" },
                  { label: "Samiczka", value: "samiczka" },
                ]}
                dropdownIcon={<ArrowDownIcon />}
                value={"tak"}
                handleChange={() => {}}
              />
            )}
          </FormRow>
          <FormRow label="Waga">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
              <InputNumberWithUnits unit="KG" />
            )}
          </FormRow>
          <FormRow label="Sterylizacja">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
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
            )}
          </FormRow>
          <FormRow label="Widoczność">
            {!isEditOn ? (
              <Input
                readOnly
                inputSize="Large"
              />
            ) : (
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
            )}
          </FormRow>
        </StyledCardInputContainer>
      </StyledCardFormContentContainer>
    );

  return null;
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
