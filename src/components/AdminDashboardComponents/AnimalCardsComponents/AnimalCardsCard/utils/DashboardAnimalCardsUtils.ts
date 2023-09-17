import { GenderType, GenreType } from "services/pet/petTypes";
import * as Yup from "yup";

export interface PetCard {
  name: string;
  description: string;
  animalCategory: GenreType | "";
  gender: GenderType | "";
  marking: string;
  months: number;
  weight: number;
  species: string;
  photos: string[];
  isSterilized: string;
  isVisible: string;
  newPhotos?: File[];
}

export const AnimalCardsCardValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("cardForm.name.required")
    .max(50, "cardForm.name.max"),
  description: Yup.string()
    .required("cardForm.description.required")
    .max(200, "cardForm.name.max"),
  animalCategory: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "cardForm.animalCategory.oneOf")
    .required("cardForm.animalCategory.required"),
  species: Yup.string().when("animalCategory", {
    is: (type: string) => type === "Dog" || type === "Cat",
    then: () =>
      Yup.string()
        .max(15, "cardForm.species.max")
        .required("cardForm.species.required"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "cardForm.gender.oneOf")
    .required("cardForm.gender.required"),
  marking: Yup.string()
    .required("cardForm.marking.required")
    .matches(
      /^[^\d!@#$%^&*()\-=_+~`[\]\\/{}|:;'"<>,.?]*$/,
      "cardForm.marking.matches"
    )
    .max(50, "cardForm.marking.max"),
  months: Yup.number()
    .required("cardForm.months.required")
    .positive("cardForm.months.positive"),
  weight: Yup.number()
    .required("cardForm.weight.required")
    .positive("cardForm.weight.positive"),
  isSterilized: Yup.string()
    .oneOf(["true", "false"], "cardForm.isSterilized.oneOf")
    .required("cardForm.isSterilized.required"),
  isVisible: Yup.string()
    .oneOf(["true", "false"], "cardForm.isVisible.oneOf")
    .required("cardForm.isVisible.required"),
});
