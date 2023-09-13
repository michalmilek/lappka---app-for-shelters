import { useCallback } from "react";
import Typography from "components/SharedComponents/Typography/Typography";
import { StyledUnathorizedSection } from "components/AuthorizationComponents/UnprotectedRoutes.styled";
import StepsBar from "components/SharedComponents/StepBar/Stepbar";
import { useState } from "react";
import RegisterStep2Form from "./RegisterStep2Form";
import RegisterStep1Form from "./RegisterStep1Form";
import RegisterStep3Form from "./RegisterStep3Form";
import { StyledRegisterTitleContent } from "./Register.styled";
import { ShelterRegisterRequest } from "services/auth/auth";
import useDeviceType from "hooks/useDeviceType";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export interface HandleStepProps {
  handleCurrentStep?: (step: number) => void;
  formValues: Partial<ShelterRegisterRequest> | null;
  handleFormValues?: (values: Partial<ShelterRegisterRequest>) => void;
}

const steps = [
  t("register.orgData"),
  t("register.userData"),
  t("register.summary"),
];

const RegisterForm = () => {
  const { t } = useTranslation();
  const deviceType = useDeviceType();
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, _setComplete] = useState(false);
  const [formValues, setFormValues] =
    useState<Partial<ShelterRegisterRequest> | null>(null);
  console.log("🚀 ~ formValues:", formValues);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleFormValues = useCallback(
    (values: Partial<ShelterRegisterRequest>) => {
      setFormValues({
        ...formValues,
        ...values,
      });
    },
    [formValues]
  );

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
        return <RegisterStep3Form />;
      default:
        return null;
    }
  };

  return (
    <StyledUnathorizedSection>
      {currentStep !== 3 ? (
        <StyledRegisterTitleContent
          mb={deviceType === "desktop" ? "32px" : "24px"}>
          <Typography
            color="primary800"
            variant={
              deviceType === "desktop"
                ? "Heading 30 Semi"
                : "Heading 24 Semi Bold"
            }
            tag="h1">
            {t("register.registerAShelter")}
          </Typography>

          <Typography
            tag="p"
            color="midGray2"
            variant="Running Text / Paragraph 14 Reg">
            {t("register.fillOut")}{" "}
            <Typography
              tag="span"
              color="primary500"
              variant="UI/UI Text 14 Semi Bold">
              {t("register.shelterAccount")}
            </Typography>
          </Typography>
        </StyledRegisterTitleContent>
      ) : (
        <StyledRegisterTitleContent mb="24px">
          <Typography
            color="primary800"
            variant={
              deviceType === "desktop"
                ? "Heading 30 Semi"
                : "Heading 24 Semi Bold"
            }
            tag="h1">
            {t("shelter.registerAShelter")}
          </Typography>

          <Typography
            tag="p"
            color="midGray2"
            variant="Running Text / Paragraph 14 Reg">
            {t("register.registerCompleted")}
          </Typography>
        </StyledRegisterTitleContent>
      )}

      {currentStep !== 3 ? (
        <StepsBar
          complete={complete}
          currentStep={currentStep}
          steps={steps}
        />
      ) : null}

      {renderFormContent()}
    </StyledUnathorizedSection>
  );
};

export default RegisterForm;
