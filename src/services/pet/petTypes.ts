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
