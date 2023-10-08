import axiosInstance, { mockInstance } from "services/axiosInstance";
import {
  GetManagementResponse,
  Role,
  WorkerInterface,
} from "./managementTypes";

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

export const getWorkers = async () => {
  try {
    const response = await mockInstance.get<WorkerInterface[]>(
      `/Management/workers`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addWorker = async (email: string) => {
  try {
    const response = await mockInstance.post(`/Management/addWorker`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWorker = async (email: string) => {
  try {
    const response = await mockInstance.delete(
      `/Management/deleteWorker/${email}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
