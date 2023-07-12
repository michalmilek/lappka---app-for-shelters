import { useEffect } from "react";
import React from "react";
import {
  ResetPasswordStep1Form,
  ResetPasswordStep2Form,
  ResetPasswordStep3Form,
  ResetPasswordStep4Form,
} from "./ResetPasswordStepsForm";
import { StyledUnathorizedSection } from "../styles";

export interface ResetPasswordFormProps {
  handleFormValues: (values: any) => void;
  handleCurrentStep: (step: number) => void;
}

const ResetPasswordForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formValues, setFormValues] = React.useState<any>(null);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleFormValues = (values: any) => {
    setFormValues({ ...formValues, ...values });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const renderTitleContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ResetPasswordStep1Form
            handleCurrentStep={handleCurrentStep}
            handleFormValues={handleFormValues}
          />
        );
      case 2:
        return (
          <ResetPasswordStep2Form
            handleCurrentStep={handleCurrentStep}
            handleFormValues={handleFormValues}
          />
        );
      case 3:
        return (
          <ResetPasswordStep3Form
            handleCurrentStep={handleCurrentStep}
            handleFormValues={handleFormValues}
          />
        );
      case 4:
        return (
          <ResetPasswordStep4Form
            handleCurrentStep={handleCurrentStep}
            handleFormValues={handleFormValues}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledUnathorizedSection>{renderTitleContent()}</StyledUnathorizedSection>
  );
};

export default ResetPasswordForm;
