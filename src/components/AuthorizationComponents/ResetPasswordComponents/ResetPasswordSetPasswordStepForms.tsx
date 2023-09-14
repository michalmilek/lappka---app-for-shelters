import { useResetPasswordSetNewPasswordMutation } from "services/auth/authServices";
import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPasswordSetPasswordFormProps } from "./ResetPasswordSetPasswordForm";
import {
  ResetPasswordInputContainer,
  ResetPasswordTitleContent,
} from "./ResetPassword.styled";
import { useEffect } from "react";
import useDeviceType from "hooks/useDeviceType";
import { useTranslation } from "react-i18next";
import useResetPasswordValidation from "./useResetPasswordValidation";

export const ResetPasswordSetPasswordStep1Form = ({
  handleCurrentStep,
}: ResetPasswordSetPasswordFormProps) => {
  const { token } = useParams();
  const { t } = useTranslation("resetPassword");
  const { resetPasswordValidation } = useResetPasswordValidation();

  const deviceType = useDeviceType();
  const { mutate: resetPasswordSetNewPasswordFn, isSuccess } =
    useResetPasswordSetNewPasswordMutation();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidation,
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
          {t("resetPassword.createANewPassword")}
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          {t("resetPassword.min8Letters")}
        </Typography>
      </ResetPasswordTitleContent>

      <ResetPasswordInputContainer>
        <Input
          label={t("resetPassword.password")}
          type="password"
          id="password"
          name="password"
          placeholder={t("resetPassword.enter")}
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
          label={t("resetPassword.confirmPassword")}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder={t("resetPassword.enter")}
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
        {t("resetPassword.createPassword")}
      </Button>
    </form>
  );
};

export const ResetPasswordSetPasswordStep2Form = () => {
  const { t } = useTranslation("resetPassword");
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
          {t("resetPassword.pwResetSuccesfully")}
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          {t("resetPassword.yourPwHasBeenReset")}
        </Typography>
      </ResetPasswordTitleContent>
      <Button
        onClick={() => navigate("/login")}
        type="button"
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        {t("resetPassword.login")}
      </Button>
    </form>
  );
};
