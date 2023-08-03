import axiosInstance from "apiCalls/axiosInstance";
import axios from "axios";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function postStoragePicture(file: File) {
  try {
    if (file.size > MAX_FILE_SIZE) {
      return { error: "File size exceeds the limit (5MB)." };
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await axiosInstance.post<string>(
      `Storage/picture`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { error: error.response.data.message || "Server error" };
      } else if (error.request) {
        return { error: "No response from the server" };
      }
    }
    return { error: "An error occurred while making the request" };
  }
}
