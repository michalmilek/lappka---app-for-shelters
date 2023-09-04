import {
  GenderType,
  GenreType,
  PetBreed,
  PetBreedLabel,
} from "services/pet/petTypes";

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

export const genderValueToLabel = (value: GenderType): string => {
  return genderLabels[value] || "Inna";
};

export const genderLabels: { [key in GenderType]: string } = {
  Other: "Inna",
  Male: "Samiec",
  Female: "Samiczka",
};

export const typeValueToLabel = (value: GenreType): string => {
  return typeLabels[value] || "Inna";
};

export const typeLabels: { [key in GenreType]: string } = {
  Other: "Inny",
  Dog: "Pies",
  Cat: "Kot",
};

export const ageConversion = (ageInMonths: number): string => {
  if (ageInMonths <= 12) {
    return ageInMonths + " miesiąc/miesięcy";
  } else {
    const years: number = Math.floor(ageInMonths / 12);
    return years + " lat/lata";
  }
};


export const formatPhoneNumber = (phoneNumber: string) => {
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  return digitsOnly;
};


export const createImgURL = (file: File | string) => {
  if (!file) return null;
  if (typeof file === "string") return file;
  return URL.createObjectURL(file);
};


export const formatCardViews = (views: number) => {
  if (views >= 100000) {
    const roundedViews = Math.floor(views / 1000);
    return `${roundedViews} tys.`;
  } else if (views >= 1000) {
    const formattedViews = new Intl.NumberFormat("en", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(views / 1000);
    return `${formattedViews} tyś`;
  } else {
    return views.toString();
  }
};