import ToggleButton from "components/SharedComponents/Button/ToggleButton";
import Input from "components/SharedComponents/Inputs/Input";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import Typography from "components/SharedComponents/Typography/Typography";
import { FormikType } from "pages/DashboardPages/VoluntaryPage";
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

interface VoluntaryFormText {
  text: string;
  children: React.ReactNode;
  formik: FormikType;
  fieldName: string;
}

const VoluntaryForm = ({
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
    <StyledVoluntaryForm>
      <StyledVoluntaryFormHeader>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          color="darkGray2">
          {text}
        </Typography>

        <ToggleButton
          handleChange={handleToggleChange}
          fieldName={fieldName}
          formik={formik}
          checked={fieldValue}
          label="Aktywna"
        />
      </StyledVoluntaryFormHeader>
      <StyledVoluntaryInputContainer>{children}</StyledVoluntaryInputContainer>
    </StyledVoluntaryForm>
  );
};

export default VoluntaryForm;
