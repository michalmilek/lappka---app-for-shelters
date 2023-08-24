import React from "react";
import { StyledUnathorizedSection } from "../UnprotectedRoutes.styled";
import {
  ResetPasswordSendEmailStep1Form,
  ResetPasswordSendEmailStep2Form,
} from "./ResetPasswordSendEmailStepsForms";

export interface ResetPasswordFormProps {
  handleCurrentStep: (step: number) => void;
}

const ResetPasswordSendEmailForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const renderTitleContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ResetPasswordSendEmailStep1Form
            handleCurrentStep={handleCurrentStep}
          />
        );
      case 2:
        return <ResetPasswordSendEmailStep2Form />;
      default:
        return null;
    }
  };

  return (
    <StyledUnathorizedSection>{renderTitleContent()}</StyledUnathorizedSection>
  );
};

export default ResetPasswordSendEmailForm;
