import i18n from "i18n";
import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: i18n.t("validators.required"),
  },
  string: {
    email: i18n.t("validators.email"),
    min: ({ min }: any) => i18n.t("validators.text_too_short", { min }),
    max: ({ max }: any) => i18n.t("validators.text_too_long", { max }),
  },
  number: {
    min: ({ min }: any) => i18n.t("validators.too_short", { min }),
    integer: i18n.t("validators.integer"),
  },
});

export const voluntaryValidationSchema = Yup.object().shape({
  bankAccountNumber: Yup.string()
    .nullable()
    .matches(
      /^(?:\d{2}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}|\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}|\d{26})$/,
      i18n.t("voluntaryValidation.bankAccountNumber.pattern")
    )
    .test(
      "is-26-digits",
      i18n.t("voluntaryValidation.bankAccountNumber.length"),
      (value?: string | null) => {
        if (!value) {
          return true;
        }
        const numbers = value.match(/\d/g);
        if (numbers && numbers.length === 26) {
          return true;
        } else {
          return false;
        }
      }
    ),
});
