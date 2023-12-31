import ToggleButton from "components/SharedComponents/Button/ToggleButton";
import Typography from "components/SharedComponents/Typography/Typography";
import { t } from "i18next";
import React from "react";
import { styled } from "styled-components";
import { FormikType } from "./VoluntaryForm";

const StyledVoluntaryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledVoluntaryFormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledVoluntaryInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface VoluntaryFormText {
  text: string;
  children: React.ReactNode;
  formik: FormikType;
  fieldName: string;
}

const VoluntaryFormPart = ({
  text,
  children,
  formik,
  fieldName,
}: VoluntaryFormText) => {
  const fieldValue = formik.getFieldProps(fieldName).value;

  const handleToggleChange = () => {
    formik.setFieldValue(fieldName, !fieldValue);
  };

  return (
    <StyledVoluntaryFormContainer>
      <StyledVoluntaryFormHeader>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          color="darkGray2">
          {text}
        </Typography>

        <ToggleButton
          handleChange={handleToggleChange}
          fieldName={fieldName}
          checked={fieldValue}
          label={t("toggleButton.active")}
        />
      </StyledVoluntaryFormHeader>
      <StyledVoluntaryInputContainer>{children}</StyledVoluntaryInputContainer>
    </StyledVoluntaryFormContainer>
  );
};

export default VoluntaryFormPart;
