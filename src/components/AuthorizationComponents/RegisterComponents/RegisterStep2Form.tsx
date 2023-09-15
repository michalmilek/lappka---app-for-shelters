import Input from "components/SharedComponents/Inputs/Input";
import { useFormik } from "formik";
import { HandleStepProps } from "./RegisterForm";
import Button from "components/SharedComponents/Button/Button";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import {
  StyledRegisterButtonContainer,
  StyledRegisterInputContainer,
} from "./Register.styled";
import { useEffect, useRef } from "react";
import { useRegisterShelterMutation } from "services/auth/authServices";
import useDeviceType from "hooks/useDeviceType";
import { RegisterStep2Validation } from "./RegisterUtils";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";

const RegisterStep2Form = ({
  handleCurrentStep,
  handleFormValues,
  formValues,
}: HandleStepProps) => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const {
    mutate: registerFn,
    isSuccess,
    isLoading,
  } = useRegisterShelterMutation();
  const formikRef = useRef<HTMLFormElement>(null);
  const { setFieldValue, ...formik } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterStep2Validation,
    onSubmit: (values) => {
      if (handleFormValues) handleFormValues({ userRequest: values });
      if (formik.isValid && formValues?.shelterRequest) {
        registerFn({
          shelterRequest: formValues.shelterRequest,
          userRequest: values,
        });
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      if (handleCurrentStep) handleCurrentStep(3);
    }
  }, [isSuccess, handleCurrentStep]);

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    if (formValues?.userRequest) {
      setFieldValue("firstName", formValues.userRequest.firstName);
      setFieldValue("lastName", formValues.userRequest.lastName);
      setFieldValue("emailAddress", formValues.userRequest.emailAddress);
    }
  }, [formValues, setFieldValue]);

  return (
    <form
      ref={formikRef}
      onSubmit={formik.handleSubmit}>
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
          size={deviceType === "desktop" ? "Large" : "Medium"}
          variant="outline"
          type="button"
          onClick={() => {
            if (handleFormValues)
              handleFormValues({ userRequest: formik.values });
            if (handleCurrentStep) handleCurrentStep(1);
          }}>
          Powrót
        </Button>
        <Button
          width="70%"
          iconSpacing="8px"
          iconPlace="right"
          size={deviceType === "desktop" ? "Large" : "Medium"}
          variant="fill"
          type="submit">
          Zarejestruj się
        </Button>
      </StyledRegisterButtonContainer>
    </form>
  );
};

export default RegisterStep2Form;
