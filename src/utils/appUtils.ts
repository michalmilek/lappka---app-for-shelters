import { PetBreed, PetBreedLabel } from "apiCalls/pet/petTypes";

export const petValueBreedToLabel = (value: PetBreed): PetBreedLabel => {
  return breedLabels[value] || "Inna";
};

const breedLabels: { [key in PetBreed]: PetBreedLabel } = {
  Inna: "Inna",
  Cat_Domowy: "Domowy",
  Cat_Perski: "Perski",
  Cat_Sfinks: "Sfinks",
  Cat_Norweski: "Norweski",
  Cat_Bengalski: "Bengalski",
  Cat_Syjamski: "Syjamski",
  Cat_Ragdoll: "Ragdoll",
  Cat_Brytyjski: "Brytyjski",
  Cat_Szkocki_Zwislouchy: "Szkocki Zwislouchy",
  Dog_Owczarek_Niemiecki: "Owczarek Niemiecki",
  Dog_Labrador: "Labrador",
  Dog_Buldog: "Buldog",
  Dog_Chihuahua: "Chihuahua",
  Dog_Kundelek: "Kundelek",
  Dog_Beagle: "Beagle",
  Dog_Husky: "Husky",
  Dog_Collie: "Collie",
};
