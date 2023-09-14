import { useEffect } from "react";
import Input from "components/SharedComponents/Inputs/Input";
import { useFormik } from "formik";
import { HandleStepProps } from "./RegisterForm";
import Button from "components/SharedComponents/Button/Button";
import { ArrowRightIcon } from "components/SharedComponents/icons/icons";
import {
  StyledRegisterHorizontalInputContainer,
  StyledRegisterHorizontalInputContainerPostalCode,
  StyledRegisterInputStep1Container,
} from "./Register.styled";
import useDeviceType from "hooks/useDeviceType";
import { formatPhoneNumber } from "utils/appUtils";
import { useTranslation } from "react-i18next";
import useRegisterValidation from "./useRegisterValidation";

const RegisterStep1Form = ({
  handleFormValues,
  formValues,
  handleCurrentStep,
}: HandleStepProps) => {
  const { t } = useTranslation("register");
  const { RegisterStep1Validation } = useRegisterValidation();
  const deviceType = useDeviceType();
  const { setValues, ...formik } = useFormik({
    initialValues: {
      organizationName: "",
      street: "",
      zipCode: "",
      city: "",
      nip: "",
      krs: "",
      phoneNumber: "",
      longitude: 14.2,
      latitude: 50,
    },
    validationSchema: RegisterStep1Validation,
    onSubmit: (values) => {
      if (handleFormValues && handleCurrentStep) {
        handleFormValues({
          shelterRequest: {
            ...values,
            phoneNumber: formatPhoneNumber(values.phoneNumber),
          },
        });
        handleCurrentStep(2);
      }
    },
  });

  useEffect(() => {
    if (formValues?.shelterRequest) {
      setValues(formValues.shelterRequest);
    }
  }, [formValues, setValues]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledRegisterInputStep1Container>
        <Input
          label={t("register.fullNameOrg")}
          type="text"
          id="organizationName"
          name="organizationName"
          placeholder={t("register.enter")}
          inputSize="Large"
          onChange={formik.handleChange}
          value={formik.values.organizationName}
          onBlur={formik.handleBlur}
          error={
            formik.touched.organizationName && formik.errors.organizationName
              ? formik.errors.organizationName
              : null
          }
        />
        <Input
          label={t("register.street")}
          type="text"
          id="street"
          name="street"
          placeholder={t("register.enter")}
          inputSize="Large"
          onChange={formik.handleChange}
          value={formik.values.street}
          onBlur={formik.handleBlur}
          error={
            formik.touched.street && formik.errors.street
              ? formik.errors.street
              : null
          }
        />
        <StyledRegisterHorizontalInputContainer>
          <StyledRegisterHorizontalInputContainerPostalCode>
            <Input
              label={t("register.zipCode")}
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder={t("register.enter")}
              inputSize="Large"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              error={
                formik.touched.zipCode && formik.errors.zipCode
                  ? formik.errors.zipCode
                  : null
              }
            />
          </StyledRegisterHorizontalInputContainerPostalCode>
          <Input
            label={t("register.city")}
            type="text"
            id="city"
            name="city"
            placeholder={t("register.enter")}
            inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            error={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : null
            }
          />
        </StyledRegisterHorizontalInputContainer>
        <Input
          label={t("register.nip")}
          type="text"
          id="nip"
          name="nip"
          placeholder={t("register.enter")}
          inputSize="Large"
          maxLength={16}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nip}
          error={
            formik.touched.nip && formik.errors.nip ? formik.errors.nip : null
          }
        />
        <Input
          label={t("register.krs")}
          type="text"
          id="krs"
          name="krs"
          placeholder={t("register.enter")}
          inputSize="Large"
          value={formik.values.krs}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.krs && formik.errors.krs ? formik.errors.krs : null
          }
        />
        <Input
          label={t("register.phoneNumber")}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder={t("register.enter")}
          inputSize="Large"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : null
          }
        />
      </StyledRegisterInputStep1Container>
      <Button
        icon={<ArrowRightIcon fill="#fff" />}
        iconSpacing="8px"
        iconPlace="right"
        size={deviceType === "desktop" ? "Large" : "Medium"}
        isFullWidth
        variant="fill"
        type="submit">
        {t("register.nextStep")}
      </Button>
    </form>
  );
};

export default RegisterStep1Form;
