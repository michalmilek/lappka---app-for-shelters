import { useEffect } from "react";
import React from "react";
import { StyledUnathorizedSection } from "../styles";
import {
  ResetPasswordSetPasswordStep1Form,
  ResetPasswordSetPasswordStep2Form,
} from "./ResetPasswordSetPasswordStepForms";

export interface ResetPasswordSetPasswordFormProps {
  handleCurrentStep: (step: number) => void;
}

const ResetPasswordSetPasswordForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const renderTitleContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ResetPasswordSetPasswordStep1Form
            handleCurrentStep={handleCurrentStep}
          />
        );
      case 2:
        return <ResetPasswordSetPasswordStep2Form />;

      default:
        return null;
    }
  };

  return (
    <StyledUnathorizedSection>{renderTitleContent()}</StyledUnathorizedSection>
  );
};

export default ResetPasswordSetPasswordForm;
