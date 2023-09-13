import { GenderType, GenreType } from "services/pet/petTypes";

export const genderValueToLabel = (value: GenderType): string => {
  return genderLabels[value] || "genderType.Other";
};

export const genderLabels: { [key in GenderType]: string } = {
  Other: "genderType.Other",
  Male: "genderType.Male",
  Female: "genderType.Female",
};

export const typeValueToLabel = (value: GenreType): string => {
  return typeLabels[value] || "genreType.Other";
};

export const typeLabels: { [key in GenreType]: string } = {
  Other: "genreType.Other",
  Dog: "genreType.Dog",
  Cat: "genreType.Cat",
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

export const mapEnglishToPolish = (englishName: string): string => {
  const translations: Record<string, string> = {
    dashboard: "Dashboard",
    messages: "Wiadomości",
    "animal-cards": "Karty zwierząt",
    "add-new-card": "Dodaj nową kartę",
    voluntary: "Wolontariat",
    employees: "Pracownicy",
    "add-new-employee": "Dodaj nowego pracownika",
    "account-settings": "Ustawienia konta",
    register: "Rejestracja",
    login: "Login",
    "reset-password": "Reset hasła",
  };

  return translations[englishName] || englishName;
};
