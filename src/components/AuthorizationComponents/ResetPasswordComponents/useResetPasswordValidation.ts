import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const useResetPasswordValidation = () => {
  const { t } = useTranslation("resetPassword");


  const sendEmailValidation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(t("resetPasswordValidation.email.invalid"))
          .required(t("resetPasswordValidation.email.required")),
      }),
    [t]
  );

  const resetPasswordValidation = useMemo(
    () =>
      Yup.object().shape({
        password: Yup.string()
          .min(6, t("resetPasswordValidation.password.min"))
          .required(t("resetPasswordValidation.password.required")),
        confirmPassword: Yup.string()
          .oneOf(
            [Yup.ref("password")],
            t("resetPasswordValidation.confirmPassword.oneOf")
          )
          .required(t("resetPasswordValidation.confirmPassword.required")),
      }),
    [t]
  );

  return { resetPasswordValidation, sendEmailValidation };
};

export default useResetPasswordValidation;
