import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const useVoluntaryValidation = () => {
  const { t } = useTranslation("voluntary");

  const voluntaryValidation = useMemo(
    () =>
      Yup.object().shape({
        bankAccountNumber: Yup.string()
          .nullable()
          .matches(
            /^(?:\d{2}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}|\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}|\d{26})$/,
            t("voluntaryValidation.bankAccountNumber.pattern")
          )
          .test(
            "is-26-digits",
            t("voluntaryValidation.bankAccountNumber.length"),
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
      }),
    [t]
  );

  return { voluntaryValidation };
};

export default useVoluntaryValidation;
