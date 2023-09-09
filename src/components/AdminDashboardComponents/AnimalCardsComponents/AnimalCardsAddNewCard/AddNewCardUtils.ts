import { GenderType, GenreType, PetBreed } from "services/pet/petTypes";
import * as Yup from "yup";

export const PetsBreeds = {
  dogsBreeds: [
    { value: "Dog_Owczarek_Niemiecki", label: "Owczarek Niemiecki" },
    { value: "Dog_Labrador", label: "Labrador" },
    { value: "Dog_Buldog", label: "Buldog" },
    { value: "Dog_Chihuahua", label: "Chihuahua" },
    { value: "Dog_Kundelek", label: "Kundelek" },
    { value: "Dog_Kundelek", label: "Kundelek" },
    { value: "Dog_Beagle", label: "Beagle" },
    { value: "Dog_Husky", label: "Husky" },
    { value: "Dog_Collie", label: "Collie" },
    { value: "Inna", label: "Inna" },
  ],
  catBreeds: [
    { value: "Inna", label: "Inna" },
    { value: "Cat_Domowy", label: "Domowy" },
    { value: "Cat_Perski", label: "Perski" },
    { value: "Cat_Sfinks", label: "Sfinks" },
    { value: "Cat_Norweski", label: "Norweski" },
    { value: "Cat_Bengalski", label: "Bengalski" },
    { value: "Cat_Syjamski", label: "Syjamski" },
    { value: "Cat_Ragdoll", label: "Ragdoll" },
    { value: "Cat_Brytyjski", label: "Brytyjski" },
    { value: "Cat_Szkocki_Zwislouchy", label: "Szkocki Zwislouchy" },
  ],
};

export interface AddNewAnimalCardInterface {
  name: string;
  description: string;
  animalCategory: GenreType | "";
  gender: GenderType | "";
  marking: string;
  months: number | undefined;
  weight: number | undefined;
  species: PetBreed | "";
  photos: File[];
  profilePhoto: string;
  isSterilized: string | "";
  isVisible: string | "";
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
