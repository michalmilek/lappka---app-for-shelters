import { useFormik } from "formik";
import { ResetPasswordFormProps } from "./ResetPasswordSendEmailForm";
import * as Yup from "yup";
import {
  ResetPasswordInputContainer,
  ResetPasswordTitleContent,
} from "./ResetPassword.styled";
import Typography from "components/SharedComponents/Typography/Typography";
import Input from "components/SharedComponents/Inputs/Input";
import Button from "components/SharedComponents/Button/Button";
import { useNavigate } from "react-router-dom";
import { useResetPasswordSendEmailMutation } from "services/auth/authServices";
import { useEffect } from "react";
import useDeviceType from "hooks/useDeviceType";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { useTranslation } from "react-i18next";
import useResetPasswordValidation from "./useResetPasswordValidation";

export const ResetPasswordSendEmailStep1Form = ({
  handleCurrentStep,
}: ResetPasswordFormProps) => {
  const { t } = useTranslation("resetPassword");
  const dispatch = useDispatch();
  const deviceType = useDeviceType();
  const {
    mutate: resetPasswordSendEmailFn,
    isSuccess,
    isLoading,
  } = useResetPasswordSendEmailMutation();
  const { sendEmailValidation } = useResetPasswordValidation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: sendEmailValidation,
    onSubmit: (values) => {
      resetPasswordSendEmailFn(values.email);
    },
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, isLoading]);

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
          {t("resetPassword.forgetPassword")}
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          {t("resetPassword.enterTheEmail")}
        </Typography>
      </ResetPasswordTitleContent>

      <ResetPasswordInputContainer>
        <Input
          label={t("resetPassword.email")}
          type="text"
          id="email"
          name="email"
          placeholder={t("resetPassword.enter")}
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
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        {t("resetPassword.resetPassword")}
      </Button>
    </form>
  );
};

export const ResetPasswordSendEmailStep2Form = () => {
  const { t } = useTranslation("resetPassword");
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
          {t("resetPassword.thankYou")}
        </Typography>

        <Typography
          tag="p"
          color="midGray2"
          variant="Running Text / Paragraph 14 Reg">
          {t("resetPassword.weSentAnEmail")}
        </Typography>
      </ResetPasswordTitleContent>
      <Button
        type="submit"
        isFullWidth
        size={deviceType === "desktop" ? "XLarge" : "Large"}>
        {t("resetPassword.close")}
      </Button>
    </form>
  );
};
