import axiosInstance, { mockInstance } from "services/axiosInstance";
import toastService from "singletons/toastService";
import {
  Animal,
  AnimalCreatePetInterface,
  AnimalEdit,
  Cat,
  Dog,
  GetShelterRespones,
  Other,
  Pet,
  ShelterCardsResponse,
  SheltersStatsResponse,
  ShelterVolunteeringResponse,
} from "./petTypes";

export const getShelter = async () => {
  try {
    const response = await axiosInstance.get<GetShelterRespones>(
      "/shelters/details"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterStats = async () => {
  try {
    const response = await mockInstance.get<SheltersStatsResponse>(
      "/Pet/shelters/stats"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterCards = async (args: [number, number]) => {
  const [pageSize, pageNumber] = args;
  try {
    const response = await axiosInstance.get<ShelterCardsResponse>(
      `/shelters/cards/petListInShelter`,
      {
        params: {
          PageNumber: pageNumber,
          PageSize: pageSize,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterVolunteering = async () => {
  try {
    const response = await mockInstance.get<ShelterVolunteeringResponse>(
      `/shelters/volunteering`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
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
    throw error;
  }
};

export const getShelterCardsArchiveChartData = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/shelters/cards/chart/year/A6313BAD-5AE9-48B8-BED5-08DB9A61FEEF"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterCardsArchiveChartDataForMonth = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/shelters/cards/chart/month/A6313BAD-5AE9-48B8-BED5-08DB9A61FEEF"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterCardsArchiveChartDataForWeek = async () => {
  try {
    const response = await axiosInstance.get<number[]>(
      "/shelters/cards/chart/week/A6313BAD-5AE9-48B8-BED5-08DB9A61FEEF"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterCardsCard = async (petId: string) => {
  try {
    const response = await mockInstance.get<Pet>(`/shelters/cards/${petId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postShelterCardsCreatePet = async (
  data: AnimalCreatePetInterface
) => {
  try {
    const response = await axiosInstance.post(
      "/shelters/cards/CreatePet",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
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
    throw error;
  }
};

export const postShelterCardsOther = async (data: Other) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/other", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postShelterCardsAnimal = async (data: Animal) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/animal", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putShelterCardsAnimal = async (data: AnimalEdit) => {
  try {
    const response = await axiosInstance.put("/shelters/cards", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postShelterCardsArchive = async (petId: string) => {
  try {
    const response = await axiosInstance.post(
      `/shelters/cards/archive/${petId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putShelterCardsPublish = async (petId: string) => {
  try {
    const response = await axiosInstance.put(
      `/shelters/cards/publish/${petId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putShelterCardsHide = async (petId: string) => {
  try {
    const response = await axiosInstance.put(`/shelters/cards/hide/${petId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
