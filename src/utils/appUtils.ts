import { GenderType, GenreType } from "services/pet/petTypes";
import { t } from "i18next";

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

export const ageConversion = (ageInMonths: number) => {
  if (ageInMonths === 1) {
    return `1 ${t("utils.month")}`;
  } else if (ageInMonths < 12) {
    return `${ageInMonths} ${t("utils.months")}`;
  } else {
    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;

    if (months === 0) {
      return `${years} ${years === 1 ? t("utils.year") : t("utils.years")}`;
    } else if (months === 1) {
      return `${years} ${
        years === 1 ? t("utils.year") : t("utils.years")
      } 1 ${t("utils.month")}`;
    } else if (months < 5) {
      return `${years} ${
        years === 1 ? t("utils.year") : t("utils.years")
      } ${months} ${t("utils.months")}`;
    } else {
      return `${years} ${
        years === 1 ? t("utils.year") : t("utils.years")
      } ${months} ${t("utils.monthsGenitive")}`;
    }
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
    return `${roundedViews} ${t("utils.thousands")}`;
  } else if (views >= 1000) {
    const formattedViews = new Intl.NumberFormat("en", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(views / 1000);
    return `${formattedViews} ${t("utils.thousands")}`;
  } else {
    return views.toString();
  }
};

export const mapEnglishToPolish = (englishName: string): string => {
  const translations: Record<string, string> = {
    dashboard: t("sidebar.dashboard"),
    messages: t("sidebar.messages"),
    "animal-cards": t("sidebar.animal-cards"),
    "add-new-card": t("sidebar.add-new-card"),
    voluntary: t("sidebar.voluntary"),
    employees: t("sidebar.employees"),
    "add-new-employee": t("sidebar.add-new-employee"),
    "account-settings": t("sidebar.account-settings"),
    register: t("sidebar.register"),
    login: t("sidebar.login"),
    "reset-password": t("sidebar.reset-password"),
  };

  return translations[englishName] || englishName;
};

export type SingleObject = Record<string, unknown>;

export const ObjectsComparisionFn = (
  obj1: SingleObject,
  obj2: SingleObject,
  properties: string[]
) => {
  for (const prop of properties) {
    if (obj1[prop] !== obj2[prop]) {
      return true;
    }
  }
  return false;
};