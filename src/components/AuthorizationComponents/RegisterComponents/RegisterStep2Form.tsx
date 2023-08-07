import Input from "components/SharedComponents/Inputs/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { HandleStepProps } from "./RegisterForm";
import Button from "components/SharedComponents/Button/Button";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import {
  StyledRegisterButtonContainer,
  StyledRegisterInputContainer,
} from "./Register.styled";
import { useEffect } from "react";
import { useRegisterShelterMutation } from "services/auth/authServices";
import { ShelterRegisterRequest } from "services/auth/auth";
import useDeviceType from "hooks/useDeviceType";

const RegisterStep2Form = ({
  handleCurrentStep,
  handleFormValues,
  formValues,
}: HandleStepProps) => {
  const deviceType = useDeviceType();
  const { mutateAsync: registerFn, isSuccess } = useRegisterShelterMutation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, {
          message: "Imię może zawierać tylko litery",
          excludeEmptyString: true,
        })
        .required('Pole "Imię" jest wymagane'),
      lastName: Yup.string()
        .matches(
          /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+(\s+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+)*$/,
          {
            message:
              "Nazwisko może zawierać tylko litery i musi składać się z przynajmniej dwóch wyrazów oddzielonych spacją",
            excludeEmptyString: true,
          }
        )
        .required('Pole "Nazwisko" jest wymagane'),
      emailAddress: Yup.string()
        .email("Nieprawidłowy format emaila")
        .required("Pole wymagane"),
      password: Yup.string()
        .min(6, "Hasło musi mieć co najmniej 6 znaków")
        .required("Pole wymagane"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Hasła muszą być identyczne")
        .required("Pole wymagane"),
    }),
    onSubmit: (values) => {
      if (handleFormValues) handleFormValues({ user: values });
    },
  });

  useEffect(() => {
    if (formValues?.shelter && formValues?.user) {
      console.log(formValues);
      registerFn(formValues as ShelterRegisterRequest);
    }
  }, [formValues, registerFn]);

  useEffect(() => {
    if (isSuccess) {
      if (handleCurrentStep) handleCurrentStep(3);
    }
  }, [isSuccess, handleCurrentStep]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledRegisterInputContainer>
        <Input
          inputSize={"Large"}
          label="Imię"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.firstName && formik.errors.firstName
              ? formik.errors.firstName
              : null
          }
        />
        <Input
          inputSize={"Large"}
          label="Nazwisko"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.lastName && formik.errors.lastName
              ? formik.errors.lastName
              : null
          }
        />
        <Input
          inputSize={"Large"}
          label="Adres e-mail"
          name="emailAddress"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.emailAddress && formik.errors.emailAddress
              ? formik.errors.emailAddress
              : null
          }
        />
        <Input
          inputSize={"Large"}
          label="Hasło"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Input
          inputSize={"Large"}
          label="Powtórz hasło"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
        />
      </StyledRegisterInputContainer>
      <StyledRegisterButtonContainer>
        <Button
          icon={<ArrowLeftIcon fill="#fff" />}
          width="30%"
          iconSpacing="8px"
          iconPlace="left"
          size="XLarge"
          variant="outline"
          type="button"
          onClick={() => {
            if (handleCurrentStep) handleCurrentStep(1);
          }}>
          Powrót
        </Button>
        <Button
          width="70%"
          iconSpacing="8px"
          iconPlace="right"
          size={deviceType === "desktop" ? "XLarge" : "Large"}
          variant="fill"
          type="submit">
          Zarejestruj się
        </Button>
      </StyledRegisterButtonContainer>
    </form>
  );
};

export default RegisterStep2Form;
