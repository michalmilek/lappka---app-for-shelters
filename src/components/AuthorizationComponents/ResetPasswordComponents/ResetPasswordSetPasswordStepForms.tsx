import { useResetPasswordSetNewPasswordMutation } from "services/auth/authServices";
import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ResetPasswordSetPasswordFormProps } from "./ResetPasswordSetPasswordForm";
import {
  ResetPasswordInputContainer,
  ResetPasswordTitleContent,
} from "./ResetPassword.styled";
import { useEffect } from "react";
import useDeviceType from "hooks/useDeviceType";
import { AxiosError } from "axios";
import useToast from "hooks/useToast";

export const ResetPasswordSetPasswordStep1Form = ({
  handleCurrentStep,
}: ResetPasswordSetPasswordFormProps) => {
  const { token } = useParams();
  const { showToast } = useToast();

  const deviceType = useDeviceType();
  const {
    mutate: resetPasswordSetNewPasswordFn,
    error,
    isError,
    isSuccess,
  } = useResetPasswordSetNewPasswordMutation();
  console.log("🚀 ~ isSuccess:", isSuccess);
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
      if (token) {
        resetPasswordSetNewPasswordFn({
          resetPasswordSetNewPasswordData: values,
          token,
        });
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      handleCurrentStep(2);
    }
  }, [isSuccess, handleCurrentStep]);

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
          Utwórz nowe hasło
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          Hasło powinno mieć m.in. 8 znaków.
        </Typography>
      </ResetPasswordTitleContent>

      <ResetPasswordInputContainer>
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
      </ResetPasswordInputContainer>

      <Button
        type="submit"
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        Utwórz hasło
      </Button>
    </form>
  );
};

export const ResetPasswordSetPasswordStep2Form = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  return (
    <form>
      <ResetPasswordTitleContent>
        <Typography
          color="primary800"
          variant={
            deviceType === "desktop"
              ? "Heading 30 Semi"
              : "Heading 24 Semi Bold"
          }
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
      </ResetPasswordTitleContent>
      <Button
        onClick={() => navigate("/login")}
        type="button"
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        Zaloguj się
      </Button>
    </form>
  );
};
