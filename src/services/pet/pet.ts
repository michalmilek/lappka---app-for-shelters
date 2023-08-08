import axiosInstance from "services/axiosInstance";
import { CatBreed, DogBreed, GenderType, PetBreed } from "./petTypes";

interface SheltersStatsResponse {
  cardCount: number;
  toAdoptCount: number;
  volunteerCount: number;
  adoptedCount: number;
}

//SHELTER CARDS
//SHELTER CARDS
//SHELTER CARDS

export interface Pet {
  id: string;
  petIdentifier: string;
  name: string;
  type: string;
  gender: "Male" | "Female" | "Other";
  breed: string;
  color: string;
  weight: number;
  profilePhoto: string;
  photos: string[];
  age: number;
  createdAt: string;
  isSterilized: boolean;
  isVisible: boolean;
  description: string;
}

export interface ShelterCardsResponse {
  items: Pet[];
  totalPages: number;
  itemFrom: number;
  itemsTo: number;
  totalItemsCount: number;
}

export interface ShelterVolunteeringResponse {
  isDonationActive: boolean;
  bankAccountNumber: string;
  donationDescription: string;
  isDailyHelpActive: boolean;
  dailyHelpDescription: string;
  isTakingDogsOutActive: boolean;
  takingDogsOutDescription: string;
}

export interface Dog {
  name: "string";
  profilePhoto: "string";
  gender: GenderType;
  description: "string";
  isVisible: true;
  months: 0;
  isSterilized: true;
  weight: 0;
  dogColor: string;
  dogBreed: DogBreed;
  photos: string[];
}

export interface Cat {
  name: string;
  profilePhoto: string;
  petIdentifier: string;
  gender: GenderType;
  description: string;
  isVisible: boolean;
  months: number;
  isSterilized: boolean;
  weight: number;
  catColor: string;
  catBreed: CatBreed;
  photos: string[];
}

export interface Other {
  name: string;
  profilePhoto: string;
  gender: GenderType;
  description: "string";
  isVisible: true;
  months: number;
  isSterilized: true;
  weight: number;
  photos: string[];
}

export interface Animal {
  name: string;
  profilePhoto: string;
  gender: GenderType;
  description: "string";
  isVisible: true;
  months: number;
  isSterilized: true;
  weight: number;
  photos: string[];
  color?: string;
  breed?: PetBreed;
}

export interface AnimalEdit extends Animal {
  petId: string;
}

export const getShelterStats = async () => {
  try {
    const response = await axiosInstance.get<SheltersStatsResponse>(
      "/Pet/shelters/stats"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getShelterCards = async () => {
  try {
    const response = await axiosInstance.get<ShelterCardsResponse>(
      "/Pet/shelters/cards"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getShelterVolunteering = async (id: string) => {
  try {
    const response = await axiosInstance.get<ShelterVolunteeringResponse>(
      `/Pet/shelters/volunteering/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateShelterVolunteering = async (
  data: ShelterVolunteeringResponse
) => {
  try {
    const response = await axiosInstance.put(
      `/Pet/shelters/volunteering`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getShelterCardsArchiveChartData = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/Pets/shelters/cards/archive/chart/year"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch shelter cards archive chart data");
  }
};

export const getShelterCardsArchiveChartDataForMonth = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/Pets/shelters/cards/archive/chart/month"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch shelter cards archive chart data");
  }
};

export const getShelterCardsArchiveChartDataForWeek = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/Pets/shelters/cards/archive/chart/week"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch shelter cards archive chart data");
  }
};

export const getShelterCardsCard = async (petId: string) => {
  try {
    const response = await axiosInstance.get<Pet>(
      `/Pets/shelters/cards/${petId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch pet card data");
  }
};

export const postShelterCardsCat = async (data: Cat) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/cat", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postShelterCardsDog = async (data: Dog) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/cat", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postShelterCardsOther = async (data: Other) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/other", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postShelterCardsAnimal = async (data: Animal) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/animal", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putShelterCardsAnimal = async (data: AnimalEdit) => {
  try {
    const response = await axiosInstance.put("/shelters/cards", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};