import axiosInstance from "services/axiosInstance";
import axios from "axios";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

export async function postStoragePictures(files: File[]) {
  try {
    const errors = files
      .filter((file) => file.size > MAX_FILE_SIZE)
      .map((file) => ({ file, error: "File size exceeds the limit (15MB)." }));

    if (errors.length > 0) {
      return errors;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const response = await axiosInstance.post<string[]>(`/Storage`, formData);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return [{ error: error.response.data.message || "Server error" }];
      } else if (error.request) {
        return [{ error: "No response from the server" }];
      }
    }
    return [{ error: "An error occurred while making the request" }];
  }
}

export const deleteStorageImage = async (imgId: string) => {
  try {
    const response = await axiosInstance.delete(`/Storage/${imgId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const deleteStorageImages = async (imgsIds: string[]) => {
  try {
    const response = await axiosInstance.delete(`/Storage`, { data: imgsIds });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const getStorageImages = async (imgsIds: string[]) => {
  try {
    const response = await axiosInstance.get(`/Storage`, {
      data: imgsIds,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};