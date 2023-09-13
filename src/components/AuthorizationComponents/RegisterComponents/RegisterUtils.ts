import * as Yup from "yup";
import { t } from "i18next";

export const RegisterStep1Validation = Yup.object().shape({
  organizationName: Yup.string().required(t("errors.required")),
  street: Yup.string().required(t("errors.required")),
  zipCode: Yup.string()
    .matches(/^\d{2}-\d{3}$/, t("errors.postalCodeFormat"))
    .required(t("errors.required")),
  city: Yup.string().required(t("errors.required")),
  nip: Yup.string()
    .required(t("errors.required"))
    .test("length", t("errors.max10"), (val) => val.length === 10),
  krs: Yup.string()
    .required(t("errors.required"))
    .test("length", t("errors.krs"), (val) => val.length === 10),
  phoneNumber: Yup.string()
    .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
      message: t("errors.phoneNumberFormat"),
      excludeEmptyString: true,
    })
    .required(t("errors.required")),
});

export const RegisterStep2Validation = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, {
      message: t("errors.firstNameFormat"),
      excludeEmptyString: true,
    })
    .required(t("errors.required")),
  lastName: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+(\s+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+)*$/, {
      message: t("errors.lastNameFormat"),
      excludeEmptyString: true,
    })
    .required(t("errors.required")),
  emailAddress: Yup.string()
    .email(t("errors.wrongEmailFormat"))
    .required(t("errors.required")),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
      t("errors.pwFormat")
    )
    .required(t("errors.required")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], t("errors.confirmPwFormat"))
    .required(t("errors.required")),
});
