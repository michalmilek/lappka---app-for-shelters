import axiosInstance from "apiCalls/axiosInstance";

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
  gender: "samiec" | "samiczka";
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
