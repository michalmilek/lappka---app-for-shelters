import Button from "components/SharedComponents/Button/Button";
import Flex from "components/SharedComponents/Flex/Flex";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import React from "react";
import { ResetPasswordFormProps } from "./ResetPasswordForm";
import * as Yup from "yup";
import Input from "components/SharedComponents/Inputs/Input";
import { useNavigate } from "react-router-dom";

export const ResetPasswordStep1Form = ({
  handleFormValues,
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email jest wymagany"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleFormValues(values);
      handleCurrentStep(2);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        flexDirection="column"
        gap="8px"
        mb="40px">
        <Typography
          color="primary800"
          variant="Heading 30 Semi"
          tag="h1">
          Zapomniałeś hasła?
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Podaj adres email użyty przy rejestracji.
        </Typography>
      </Flex>

      <Input
        label="Email"
        type="text"
        id="email"
        name="email"
        placeholder="Wpisz"
        inputSize="Large"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
      />

      <Button
        mt="32px"
        width={"100%"}
        size="XLarge">
        Resetuj hasło
      </Button>
    </form>
  );
};

export const ResetPasswordStep2Form = ({
  handleFormValues,
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  return (
    <form onSubmit={() => handleCurrentStep(3)}>
      <Flex
        flexDirection="column"
        gap="8px"
        mb="40px">
        <Typography
          color="primary800"
          variant="Heading 30 Semi"
          tag="h1">
          Dziękujemy
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Wysłalismy na adres email link do stworzenia nowego hasła.
        </Typography>
      </Flex>
      <Button
        type="submit"
        width={"100%"}
        size="XLarge">
        Zamknij
      </Button>
    </form>
  );
};

export const ResetPasswordStep3Form = ({
  handleFormValues,
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
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
      handleCurrentStep(4);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        flexDirection="column"
        gap="8px"
        mb="40px">
        <Typography
          color="primary800"
          variant="Heading 30 Semi"
          tag="h1">
          Zapomniałeś hasła?
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Podaj adres email użyty przy rejestracji.
        </Typography>
      </Flex>

      <Flex
        flexDirection="column"
        gap="16px">
        <Input
          label="Hasło"
          type="password"
          id="password"
          name="password"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Input
          label="Potwierdź hasło"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null
          }
        />
      </Flex>

      <Button
        mt="32px"
        width={"100%"}
        size="XLarge">
        Utwórz hasło
      </Button>
    </form>
  );
};

export const ResetPasswordStep4Form = ({
  handleFormValues,
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  const navigate = useNavigate();
  return (
    <form>
      <Flex
        flexDirection="column"
        gap="8px"
        mb="40px">
        <Typography
          color="primary800"
          variant="Heading 30 Semi"
          tag="h1">
          Hasło zresetowane pomyślnie
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Twoje hasło zostało zresetowane. Możesz już zalogować się do swojego
          konta.
        </Typography>
      </Flex>
      <Button
        onClick={() => navigate("/login")}
        type="button"
        width={"100%"}
        size="XLarge">
        Zaloguj się
      </Button>
    </form>
  );
};
