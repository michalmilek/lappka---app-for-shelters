import { GenderType, GenreType, PetBreed } from "services/pet/petTypes";
import * as Yup from "yup";

export interface PetCard {
  name: string;
  description: string;
  type: GenreType | "";
  gender: GenderType | "";
  color: string;
  months: number;
  weight: number;
  breed: PetBreed | "";
  photos: string[];
  profilePhoto: string;
  isSterilized: string | "";
  isVisible: string | "";
  newPhotos?: File[];
}

export const AnimalCardsCardValidationSchema = Yup.object().shape({
  name: Yup.string().required("To pole jest wymagane"),
  description: Yup.string().required("To pole jest wymagane"),
  type: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  breed: Yup.string().when("type", {
    is: (type: string) => type === "Dog" || type === "Cat",
    then: () =>
      Yup.string()
        .max(15, "Rasa nie może przekraczać 15 liter")
        .required("To pole jest wymagane"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  color: Yup.string().required("To pole jest wymagane"),
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
