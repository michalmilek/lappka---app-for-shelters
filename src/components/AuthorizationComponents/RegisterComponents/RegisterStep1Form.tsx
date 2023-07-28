import React from "react";
import Input from "components/SharedComponents/Inputs/Input";
import * as Yup from "yup";
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
import { Shelter } from "apiCalls/auth/auth";

const RegisterStep1Form = ({
  handleFormValues,
  formValues,
  handleCurrentStep,
}: HandleStepProps) => {
  const deviceType = useDeviceType();
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      street: "",
      zipCode: "",
      city: "",
      nip: "",
      krs: "",
      phoneNumber: "",
      longitude: 0,
      latitude: 0,
    },
    validationSchema: Yup.object().shape({
      organizationName: Yup.string().required(
        'Pole "Pełna Nazwa Organizacji" jest wymagane'
      ),
      street: Yup.string().required('Pole "Ulica" jest wymagane'),
      zipCode: Yup.string()
        .matches(/^\d{2}-\d{3}$/, "Kod pocztowy powinien być w formacie XX-XXX")
        .required('Pole "Kod pocztowy" jest wymagane'),
      city: Yup.string().required('Pole "Miasto" jest wymagane'),
      nip: Yup.string().required('Pole "Numer NIP" jest wymagane'),
      krs: Yup.string().required('Pole "Numer KRS" jest wymagane'),
      phoneNumber: Yup.string()
        .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
          message:
            "Numer telefonu powinien składać się z 9 cyfr i może zawierać opcjonalnie myślniki lub spacje po trzeciej i szóstej cyfrze",
          excludeEmptyString: true,
        })
        .required('Pole "Numer telefonu" jest wymagane'),
    }),
    onSubmit: (values) => {
      if (handleFormValues && handleCurrentStep) {
        handleFormValues({ shelter: values });
        handleCurrentStep(2);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledRegisterInputStep1Container>
        <Input
          $label="Pełna Nazwa Organizacji"
          type="text"
          id="organizationName"
          name="organizationName"
          placeholder="Wpisz"
          $inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $error={
            formik.touched.organizationName && formik.errors.organizationName
              ? formik.errors.organizationName
              : null
          }
        />
        <Input
          $label="Ulica"
          type="text"
          id="street"
          name="street"
          placeholder="Wpisz"
          $inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $error={
            formik.touched.street && formik.errors.street
              ? formik.errors.street
              : null
          }
        />
        <StyledRegisterHorizontalInputContainer>
          <StyledRegisterHorizontalInputContainerPostalCode>
            <Input
              $label="Kod pocztowy"
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Wpisz"
              $inputSize="Large"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              $error={
                formik.touched.zipCode && formik.errors.zipCode
                  ? formik.errors.zipCode
                  : null
              }
            />
          </StyledRegisterHorizontalInputContainerPostalCode>
          <Input
            $label="Miasto"
            type="text"
            id="city"
            name="city"
            placeholder="Wpisz"
            $inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            $error={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : null
            }
          />
        </StyledRegisterHorizontalInputContainer>
        <Input
          $label="Numer NIP"
          type="text"
          id="nip"
          name="nip"
          placeholder="Wpisz"
          $inputSize="Large"
          maxLength={16}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $error={
            formik.touched.nip && formik.errors.nip ? formik.errors.nip : null
          }
        />
        <Input
          $label="Numer KRS"
          type="text"
          id="krs"
          name="krs"
          placeholder="Wpisz"
          $inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $error={
            formik.touched.krs && formik.errors.krs ? formik.errors.krs : null
          }
        />
        <Input
          $label="Numer telefonu"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Wpisz"
          $inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          $error={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : null
          }
        />
      </StyledRegisterInputStep1Container>
      <Button
        $icon={<ArrowRightIcon fill="#fff" />}
        $iconSpacing="8px"
        $iconPlace="right"
        $size={deviceType === "desktop" ? "Large" : "Medium"}
        $isFullWidth
        $variant="fill"
        type="submit">
        Następny krok
      </Button>
    </form>
  );
};

export default RegisterStep1Form;
