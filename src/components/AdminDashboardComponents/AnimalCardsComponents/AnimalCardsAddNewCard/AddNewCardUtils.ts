import { GenderType, GenreType } from "services/pet/petTypes";
import * as Yup from "yup";

export interface AddNewAnimalCardInterface {
  name: string;
  description: string;
  animalCategory: GenreType | "";
  gender: GenderType | "";
  marking: string;
  months: number | undefined;
  weight: number | undefined;
  species: string;
  photos: File[];
  profilePhoto: string;
  isSterilized: string;
  isVisible: string;
}

export const cardValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("To pole jest wymagane")
    .max(50, "Pole 'Imię' może mieć maksymalnie 50 znaków"),
  description: Yup.string()
    .required("To pole jest wymagane")
    .max(200, "Pole 'Opis' może mieć maksymalnie 200 znaków"),
  animalCategory: Yup.string()
    .oneOf(["Dog", "Cat", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  species: Yup.string().when("animalCategory", {
    is: (type: string) => type === "Dog" || type === "Cat",
    then: () =>
      Yup.string()
        .max(15, "Rasa nie może przekraczać 15 liter")
        .required("To pole jest wymagane"),
  }),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Nieprawidłowy wybór")
    .required("To pole jest wymagane"),
  marking: Yup.string()
    .required("To pole jest wymagane")
    .matches(
      /^[^\d!@#$%^&*()\-=_+~`[\]\\/{}|:;'"<>,.?]*$/,
      "Pole może zawierać tylko litery, spacje i pauzy"
    )
    .max(50, "Pole 'Opis' może mieć maksymalnie 50 znaków"),
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

export const addNewCardInitialValues: AddNewAnimalCardInterface = {
  name: "",
  description: "",
  animalCategory: "",
  gender: "",
  marking: "",
  months: undefined,
  weight: undefined,
  photos: [],
  isSterilized: "",
  isVisible: "",
  profilePhoto: "",
  species: "",
};
