import { useEffect } from "react";
import Input from "../SharedComponents/Inputs/Input";
import Flex from "components/SharedComponents/Flex/Flex";
import * as Yup from "yup";
import { useFormik } from "formik";
import { handleCurrentStepProps } from "./RegisterForm";
import Button from "components/SharedComponents/Button/Button";
import { ArrowLeftIcon } from "components/SharedComponents/icons/icons";
import { Form } from "./styles";

const RegisterStep2Form = ({
  handleCurrentStep,
  handleFormValues,
  formValues,
}: handleCurrentStepProps) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .matches(
          /^.+\s.+$/,
          "Imię i Nazwisko muszą składać się z przynajmniej dwóch wyrazów"
        )
        .required("Pole wymagane"),
      email: Yup.string()
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
      console.log(values);
      handleFormValues(values);
      handleCurrentStep(3);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        mt="50px"
        flexDirection="column"
        gap="16px">
        <Input
          inputSize={"Large"}
          label="Imię i Nazwisko"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : null
          }
        />
        <Input
          inputSize={"Large"}
          label="Adres e-mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
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
      </Flex>
      <Flex
        width="100%"
        mt="32px"
        gap="24px"
        alignItems="center">
        <Button
          icon={<ArrowLeftIcon fill="#fff" />}
          width="30%"
          iconSpacing="8px"
          iconPlace="left"
          size="XLarge"
          variant="outline"
          type="button"
          onClick={() => {
            handleCurrentStep(1);
          }}>
          Powrót
        </Button>
        <Button
          width="70%"
          iconSpacing="8px"
          iconPlace="right"
          size="XLarge"
          variant="fill"
          type="submit">
          Zarejestruj się
        </Button>
      </Flex>
    </form>
  );
};

export default RegisterStep2Form;
