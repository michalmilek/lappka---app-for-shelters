export interface GetShelterRespones {
  id: string;
  organizationName: string;
  longitude: number;
  latitude: number;
  city: string;
  street: string;
  zipCode: string;
  nip: string;
  krs: string;
  phoneNumber: string;
}

export type GenderType = "Male" | "Female" | "Other";
export type GenreType = "Dog" | "Cat" | "Other";

export interface SheltersStatsResponse {
  cardCount: number;
  toAdoptCount: number;
  volunteerCount: number;
  adoptedCount: number;
}

//SHELTER CARDS
//SHELTER CARDS
//SHELTER CARDS

export interface Pet {
  petId: string;
  name: string;
  animalCategory: GenreType;
  gender: GenderType;
  species: string;
  marking: string;
  weight: number;
  profilePhoto: string;
  photos: string[];
  months: number;
  createdAt: string;
  isSterilized: boolean;
  isVisible: boolean;
  description: string;
  views: number;
}

export interface PetItem extends Omit<Pet, "createdAt" | "views"> {}

export interface CreatePet extends Omit<Pet, "petId" | "createdAt" | "views"> {}

export interface ShelterCardsResponse {
  petInListInShelterDto: Pet[];
  totalPages: number;
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