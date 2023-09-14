import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const useLoginValidation = () => {
  const { t } = useTranslation("login");

  const loginValidation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(t("loginValidation.email.invalidFormat"))
          .required(t("loginValidation.email.required")),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
            t("loginValidation.password.invalidFormat")
          )
          .required(t("loginValidation.password.required")),
      }),
    [t]
  );

  return { loginValidation };
};

export default useLoginValidation;
