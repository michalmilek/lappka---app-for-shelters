export type CatBreed =
  | "Inna"
  | "Cat_Domowy"
  | "Cat_Perski"
  | "Cat_Sfinks"
  | "Cat_Norweski"
  | "Cat_Bengalski"
  | "Cat_Syjamski"
  | "Cat_Ragdoll"
  | "Cat_Brytyjski"
  | "Cat_Szkocki_Zwislouchy";

  export type CatBreedLabel =
    | "Inna"
    | "Domowy"
    | "Perski"
    | "Sfinks"
    | "Norweski"
    | "Bengalski"
    | "Syjamski"
    | "Ragdoll"
    | "Brytyjski"
    | "Szkocki Zwislouchy";

  export type DogBreed =
    | "Inna"
    | "Dog_Owczarek_Niemiecki"
    | "Dog_Labrador"
    | "Dog_Buldog"
    | "Dog_Chihuahua"
    | "Dog_Kundelek"
    | "Dog_Beagle"
    | "Dog_Husky"
    | "Dog_Collie";

  export type DogBreedLabel =
    | "Inna"
    | "Owczarek Niemiecki"
    | "Labrador"
    | "Buldog"
    | "Chihuahua"
    | "Kundelek"
    | "Beagle"
    | "Husky"
    | "Collie";

  export type PetBreed = DogBreed | CatBreed;
  export type PetBreedLabel = DogBreedLabel | CatBreedLabel;

  export interface BreedOption {
    value: DogBreed;
    label: DogBreedLabel;
  }

  export type GenderType = "Male" | "Female" | "Other";
  export type GenreType = "Dog" | "Cat" | "Other";
