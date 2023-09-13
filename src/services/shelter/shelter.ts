import axiosInstance from "services/axiosInstance";

interface ShelterUpdate {
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

export const putShelter = async (data: ShelterUpdate) => {
  try {
    const response = await axiosInstance.put("/shelters", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
