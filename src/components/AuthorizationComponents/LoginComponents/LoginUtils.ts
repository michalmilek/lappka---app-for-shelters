import * as Yup from "yup";
import { t } from "i18next";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email(t("errors.wrongEmailFormat"))
    .required(t("errors.required")),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
      t("errors.pwFormat")
    )
    .required(t("errors.required")),
});
