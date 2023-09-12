import axiosInstance, { mockInstance } from "services/axiosInstance";
import {
  CreatePet,
  GetShelterRespones,
  PetItem,
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

export const getShelterCards = async (
  args: [number, number],
  sortParam: string = "createdAt",
  asc: string = "false"
) => {
  const [pageSize, pageNumber] = args;
  try {
    const response = await axiosInstance.get<ShelterCardsResponse>(
      `/shelters/cards/petListInShelter`,
      {
        params: {
          pageNumber: pageNumber,
          pageSize: pageSize,
          sortParam,
          asc,
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
    const response = await axiosInstance.get<ShelterVolunteeringResponse>(
      `/shelters/volunteering/GetShelterVolunteering`
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
      `/shelters/volunteering/update`,
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
      "/shelters/cards/chart/year"
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
      "/shelters/cards/chart/month"
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
      "/shelters/cards/chart/week"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getShelterCardsCard = async (petId: string) => {
  try {
    const response = await axiosInstance.get<PetItem>(
      `/shelters/cards/get/${petId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postShelterCardsCreatePet = async (data: CreatePet) => {
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

export const postShelterCardsAnimal = async (data: CreatePet) => {
  try {
    const response = await axiosInstance.post("/shelters/cards/animal", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const putShelterCardsAnimal = async (data: PetItem) => {
  try {
    const response = await axiosInstance.put("/Shelter/cards/Update", data);
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

export const deleteShelterCard = async (petId: string) => {
  try {
    const response = await axiosInstance.delete(
      `/Shelter/cards/delete/${petId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
