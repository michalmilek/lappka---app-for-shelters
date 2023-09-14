import * as Yup from "yup";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useAnimalCardsValidation = () => {
  const { t } = useTranslation("animalCards");

  const animalCardsCardValidationSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string()
          .required(t("cardFormValidation.name.required"))
          .max(50, t("cardFormValidation.name.max")),
        description: Yup.string()
          .required(t("cardFormValidation.description.required"))
          .max(200, t("cardFormValidation.name.max")),
        animalCategory: Yup.string()
          .oneOf(
            ["Dog", "Cat", "Other"],
            t("cardFormValidation.animalCategory.oneOf")
          )
          .required(t("cardFormValidation.animalCategory.required")),
        species: Yup.string().when("animalCategory", {
          is: (type: string) => type === "Dog" || type === "Cat",
          then: () =>
            Yup.string()
              .max(15, t("cardFormValidation.species.max"))
              .required(t("cardFormValidation.species.required")),
        }),
        gender: Yup.string()
          .oneOf(
            ["Male", "Female", "Other"],
            t("cardFormValidation.gender.oneOf")
          )
          .required(t("cardFormValidation.gender.required")),
        marking: Yup.string()
          .required(t("cardFormValidation.marking.required"))
          .matches(
            /^[^\d!@#$%^&*()\-=_+~`[\]\\/{}|:;'"<>,.?]*$/,
            t("cardFormValidation.marking.matches")
          )
          .max(50, t("cardFormValidation.marking.max")),
        months: Yup.number()
          .required(t("cardFormValidation.months.required"))
          .positive(t("cardFormValidation.months.positive")),
        weight: Yup.number()
          .required(t("cardFormValidation.weight.required"))
          .positive(t("cardFormValidation.weight.positive")),
        isSterilized: Yup.string()
          .oneOf(["true", "false"], t("cardFormValidation.isSterilized.oneOf"))
          .required(t("cardFormValidation.isSterilized.required")),
        isVisible: Yup.string()
          .oneOf(["true", "false"], t("cardFormValidation.isVisible.oneOf"))
          .required(t("cardFormValidation.isVisible.required")),
      }),
    [t]
  );

  return { animalCardsCardValidationSchema };
};

export default useAnimalCardsValidation;
