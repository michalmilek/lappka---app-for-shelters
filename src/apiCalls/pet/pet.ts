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


export interface ShelterVolunteeringResponse {
  isDonationActive: boolean;
  bankAccountNumber: string;
  donationDescription: string;
  isDailyHelpActive: boolean;
  dailyHelpDescription: string;
  isTakingDogsOutActive: boolean;
  takingDogsOutDescription: string;
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

