import { useFormik } from "formik";
import { ResetPasswordFormProps } from "./ResetPasswordSendEmailForm";
import * as Yup from "yup";
import {
  ResetPasswordInputContainer,
  ResetPasswordTitleContent,
} from "./styles";
import Typography from "components/SharedComponents/Typography/Typography";
import Input from "components/SharedComponents/Inputs/Input";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { useResetPasswordSendEmailMutation } from "apiCalls/auth/authHooks";
import { useEffect } from "react";
import useDeviceType from "hooks/useDeviceType";

export const ResetPasswordSendEmailStep1Form = ({
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  const deviceType = useDeviceType();
  const { mutateAsync: resetPasswordSendEmailFn, isSuccess } =
    useResetPasswordSendEmailMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email jest wymagany"),
    }),
    onSubmit: (values) => {
      console.log(values);
      resetPasswordSendEmailFn(values.email);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      handleCurrentStep(2);
    }
  }, [handleCurrentStep, isSuccess]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <ResetPasswordTitleContent>
        <Typography
          color="primary800"
          variant={
            deviceType === "desktop"
              ? "Heading 30 Semi"
              : "Heading 24 Semi Bold"
          }
          tag="h1">
          Zapomniałeś hasła?
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Podaj adres email użyty przy rejestracji.
        </Typography>
      </ResetPasswordTitleContent>

      <ResetPasswordInputContainer>
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
      </ResetPasswordInputContainer>

      <Button
        width={"100%"}
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        Resetuj hasło
      </Button>
    </form>
  );
};

export const ResetPasswordSendEmailStep2Form = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();

  return (
    <form onSubmit={() => navigate("/login")}>
      <ResetPasswordTitleContent>
        <Typography
          color="primary800"
          variant={
            deviceType === "desktop"
              ? "Heading 30 Semi"
              : "Heading 24 Semi Bold"
          }
          tag="h1">
          Dziękujemy
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Wysłalismy na adres email link do stworzenia nowego hasła.
        </Typography>
      </ResetPasswordTitleContent>
      <Button
        type="submit"
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        Zamknij
      </Button>
    </form>
  );
};
