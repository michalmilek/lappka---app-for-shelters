import axiosInstance from "services/axiosInstance";
import { GetManagementResponse, Role } from "./managementTypes";

export const getManagement = async (role: Role) => {
  try {
    const response = await axiosInstance.get<GetManagementResponse>(
      "/Management",
      {
        params: {
          role,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
