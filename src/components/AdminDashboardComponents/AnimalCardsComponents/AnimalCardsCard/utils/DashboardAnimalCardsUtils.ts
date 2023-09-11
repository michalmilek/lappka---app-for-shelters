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
  profilePhoto: string;
  isSterilized: string;
  isVisible: string;
  newPhotos?: File[];
}

export const AnimalCardsCardValidationSchema = Yup.object().shape({
  name: Yup.string().required("To pole jest wymagane"),
  description: Yup.string().required("To pole jest wymagane"),
  animalCategory: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  species: Yup.string().when("animalCategory", {
    is: (animalCategory: string) =>
      animalCategory === "Dog" || animalCategory === "Cat",
    then: () =>
      Yup.string()
        .max(15, "Rasa nie może przekraczać 15 liter")
        .required("To pole jest wymagane"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  marking: Yup.string().required("To pole jest wymagane"),
  months: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  weight: Yup.number()
    .required("To pole jest wymagane")
    .positive("Wartość musi być większa od zera"),
  isSterilized: Yup.string()
    .oneOf(["true", "false"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  isVisible: Yup.string()
    .oneOf(["true", "false"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
});
