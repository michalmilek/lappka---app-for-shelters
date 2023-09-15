import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const useAddEmployeeValidation = () => {
  const { t } = useTranslation("employees");

  const addEmployeeValidation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .email(t("addNewEmployeeValidation.email.string"))
          .required(t("addNewEmployeeValidation.email.required")),
      }),
    [t]
  );

  return { addEmployeeValidation };
};

export default useAddEmployeeValidation;
