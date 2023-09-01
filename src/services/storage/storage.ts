import axiosInstance, { mockInstance } from "services/axiosInstance";
import axios from "axios";
import { stringify } from "qs";
import toastService from "singletons/toastService";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

export async function postStoragePictures(files: File[]) {
  try {
    const errors = files
      .filter((file) => file.size > MAX_FILE_SIZE)
      .map((file) => ({
        file,
        error: "Wielkość jednego z plików przekracza 15MB.",
      }));

    if (errors.length > 0) {
      throw errors;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const response = await axiosInstance.post<string[]>(`/Storage`, formData);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const deleteStorageImage = async (imgId: string) => {
  try {
    const response = await axiosInstance.delete(`/Storage/${imgId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteStorageImages = async (imgsIds: string[]) => {
  try {
    const response = await axiosInstance.delete(`/Storage`, { data: imgsIds });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStorageImages = async (imgsIds: string[]) => {
  try {
    const response = await axiosInstance.get<string[]>(`/Storage`, {
      params: { ids: imgsIds },
      paramsSerializer: (params) => stringify(params),
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStorageImage = async (imgId: string) => {
  try {
    const response = await axiosInstance.get<string[]>(`/Storage`, {
      params: { ids: [imgId] },
      paramsSerializer: (params) => stringify(params),
    });
    return response.data[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function postStoragePicture(file: File) {
  try {
    if (file.size > MAX_FILE_SIZE) {
      toastService.showToast("Wielkość pliku przekracza 15mb", "error");
    } else {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post<string[]>(`/Storage`, formData);

      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}