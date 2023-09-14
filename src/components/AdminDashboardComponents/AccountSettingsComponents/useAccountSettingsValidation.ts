import { useMemo } from "react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const useAccountSettingsValidation = () => {
  const { t } = useTranslation("accountSettings");

  const accountSettingsValidation = useMemo(
    () =>
      Yup.object().shape({
        organizationName: Yup.string().required(
          t("accountSettingsValidation.validation.organizationName")
        ),
        street: Yup.string().required(
          t("accountSettingsValidation.validation.street")
        ),
        zipCode: Yup.string().required(
          t("accountSettingsValidation.validation.zipCode")
        ),
        city: Yup.string().required(
          t("accountSettingsValidation.validation.city")
        ),
        phoneNumber: Yup.string()
          .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
            message: t(
              "accountSettingsValidation.validation.phoneNumber.invalidFormat"
            ),
            excludeEmptyString: true,
          })
          .required(
            t("accountSettingsValidation.validation.phoneNumber.required")
          ),
        nip: Yup.string().required(
          t("accountSettingsValidation.validation.nip")
        ),
        krs: Yup.string().required(
          t("accountSettingsValidation.validation.krs")
        ),
        firstName: Yup.string().required(
          t("accountSettingsValidation.validation.firstName")
        ),
        lastName: Yup.string().required(
          t("accountSettingsValidation.validation.lastName")
        ),
        email: Yup.string()
          .email(t("accountSettingsValidation.validation.email.invalidFormat"))
          .required(t("accountSettingsValidation.validation.email.required")),
      }),
    [t]
  );

  return { accountSettingsValidation };
};

export default useAccountSettingsValidation;
