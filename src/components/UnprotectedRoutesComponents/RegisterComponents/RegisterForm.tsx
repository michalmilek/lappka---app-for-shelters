import { useEffect } from "react";
import Typography from "components/SharedComponents/Typography/Typography";
import { StyledUnathorizedSection } from "components/UnprotectedRoutesComponents/styles";
import StepsBar from "components/SharedComponents/StepBar/Stepbar";
import { useState } from "react";
import RegisterStep2Form from "./RegisterStep2Form";
import RegisterStep1Form from "./RegisterStep1Form";
import RegisterStep3Form from "./RegisterStep3Form";
import { StyledRegisterTitleContent } from "./styles";
import useAbove500px from "hooks/useAbove500px";
import { Shelter, ShelterRegisterRequest, User } from "apiCalls/auth/auth";

export interface handleCurrentStep1Props {
  handleCurrentStep: (step: number) => void;
  clearFormValues: () => void;
  handleFormValuesStep1: (values: Shelter) => void;
  formValues: Partial<ShelterRegisterRequest> | null;
}

export interface handleCurrentStep2Props {
  handleCurrentStep: (step: number) => void;
  handleFormValuesStep2: (values: User) => void;
  formValues: Partial<ShelterRegisterRequest> | null;
}
export interface handleCurrentStep3Props {
  handleFormValues: (values: any) => void;
  formValues: Partial<ShelterRegisterRequest> | null;
}

export interface handleCompleteProps {
  handleCurrentStep: (step: number) => void;
  handleComplete: (value: boolean) => void;
}

const steps = ["Dane organizacji", "Dane użytkownika", "Podsumowanie"];

const RegisterForm = () => {
  const above500px = useAbove500px();
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formValues, setFormValues] =
    useState<Partial<ShelterRegisterRequest> | null>(null);

  useEffect(() => {
    if (currentStep === 1) {
      setFormValues(null);
    }
  }, [currentStep]);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleComplete = (value: boolean) => {
    setComplete(value);
  };

  const clearFormValues = () => {
    setFormValues(null);
  };

  const handleFormValuesStep1 = (values: Shelter) => {
    setFormValues({
      ...formValues,
      shelter: {
        ...values,
      },
    });
  };

  const handleFormValuesStep2 = (values: User) => {
    setFormValues({
      ...formValues,
      user: {
        ...values,
      },
    });
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegisterStep1Form
            clearFormValues={clearFormValues}
            handleFormValuesStep1={handleFormValuesStep1}
            formValues={formValues}
            handleCurrentStep={handleCurrentStep}
          />
        );
      case 2:
        return (
          <RegisterStep2Form
            handleFormValues={handleFormValues}
            formValues={formValues}
            handleCurrentStep={handleCurrentStep}
          />
        );
      case 3:
        return (
          <RegisterStep3Form
            handleFormValues={handleFormValues}
            formValues={formValues}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledUnathorizedSection>
      {currentStep !== 3 ? (
        <StyledRegisterTitleContent mb={above500px ? "32px" : "24px"}>
          <Typography
            color="primary800"
            variant={above500px ? "Heading 30 Semi" : "Heading 24 Semi Bold"}
            tag="h1">
            Zarejestruj schronisko
          </Typography>

          <Typography
            tag="p"
            color="midGray2"
            variant="Running Text / Paragraph 14 Reg">
            Wypełnij poniższy formularz i załóż{" "}
            <Typography
              tag="span"
              color="primary500"
              variant="UI/UI Text 14 Semi Bold">
              Konto schroniska
            </Typography>
          </Typography>
        </StyledRegisterTitleContent>
      ) : (
        <StyledRegisterTitleContent mb="24px">
          <Typography
            color="primary800"
            variant={above500px ? "Heading 30 Semi" : "Heading 24 Semi Bold"}
            tag="h1">
            Zarejestruj schronisko
          </Typography>

          <Typography
            tag="p"
            color="midGray2"
            variant="Running Text / Paragraph 14 Reg">
            Proces rejestracji przebiegł pomyślnie. Na Twój adres email została
            wysłana wiadomość z linkiem aktywacyjnym, kliknij w link i przejdź
            do logowania.
          </Typography>
        </StyledRegisterTitleContent>
      )}

      {currentStep !== 3 ? (
        <StepsBar
          complete={complete}
          currentStep={currentStep}
          handleComplete={handleComplete}
          handleCurrentStep={handleCurrentStep}
          steps={steps}
        />
      ) : null}

      {renderFormContent()}
    </StyledUnathorizedSection>
  );
};

export default RegisterForm;
