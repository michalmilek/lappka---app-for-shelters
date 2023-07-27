import ToggleButton from "components/SharedComponents/Button/ToggleButton";
import Input from "components/SharedComponents/Inputs/Input";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { styled } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const StyledVoluntaryForm = styled.form`
  background: ${getColor("white")};
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px #1018280f;

  box-shadow: 0px 1px 3px 0px #1018281a;
`;

const StyledVoluntaryFormHeader = styled.header`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${getColor("lightGray3")};
`;

const StyledVoluntaryInputContainer = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const VoluntaryForm = () => {
  return (
    <StyledVoluntaryForm>
      <StyledVoluntaryFormHeader>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          color="darkGray2">
          Wpłać darowiznę
        </Typography>

        <ToggleButton label="Aktywna" />
      </StyledVoluntaryFormHeader>
      <StyledVoluntaryInputContainer>
        <Input
          inputSize="Large"
          label="Podaj numer konta"
        />
        <Textarea label="Opis" />
      </StyledVoluntaryInputContainer>
    </StyledVoluntaryForm>
  );
};

export default VoluntaryForm;
