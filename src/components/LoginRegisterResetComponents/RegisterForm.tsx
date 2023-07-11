import { useEffect } from "react";
import Typography from "../SharedComponents/Typography/Typography";
import Flex from "components/SharedComponents/Flex/Flex";
import { SectionForm } from "./styles";
import StepsBar from "components/SharedComponents/StepBar/Stepbar";
import { useState } from "react";
import RegisterStep2Form from "./RegisterStep2Form";
import RegisterStep1Form from "./RegisterStep1Form";
import RegisterStep3Form from "./RegisterStep3Form";

export interface handleCurrentStepProps {
  handleCurrentStep: (step: number) => void;
  handleFormValues: (values: any) => void;
  formValues: any;
}
export interface handleCurrentStep3Props {
  handleFormValues: (values: any) => void;
  formValues: any;
}

export interface handleCompleteProps {
  handleCurrentStep: (step: number) => void;
  handleComplete: (value: boolean) => void;
}

const steps = ["Dane organizacji", "Dane użytkownika", "Podsumowanie"];

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formValues, setFormValues] = useState<any>(null);

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

  const handleFormValues = (values: any) => {
    setFormValues({ ...formValues, ...values });
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegisterStep1Form
            handleFormValues={handleFormValues}
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
    <SectionForm>
      {currentStep !== 3 ? (
        <Flex
          flexDirection="column"
          gap="8px"
          mb="32px">
          <Typography
            color="primary800"
            variant="Heading 30 Semi"
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
        </Flex>
      ) : (
        <Flex
          flexDirection="column"
          gap="8px"
          mb="24px">
          <Typography
            color="primary800"
            variant="Heading 30 Semi"
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
        </Flex>
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
    </SectionForm>
  );
};

export default RegisterForm;
