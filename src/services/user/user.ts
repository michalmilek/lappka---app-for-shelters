import axiosInstance from "services/axiosInstance";

export interface GetUserResponse {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  profilePicture: string;
  role: string;
  loginProvider: string;
}

export interface PatchUserRequest {
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface PatchEmailAddressRequest {
  email: string;
}

export interface PatchUserNewPasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export const deleteProfilePicture = async () => {
  try {
    const response = await axiosInstance.delete(`
/User/picture`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const response = await axiosInstance.get<GetUserResponse>(`/User`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchUser = async (data: PatchUserRequest) => {
  try {
    const response = await axiosInstance.patch(
      `
/User`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const response = await axiosInstance.delete("/User");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchUserEmailAddress = async (data: PatchEmailAddressRequest) => {
  try {
    const response = await axiosInstance.patch("/User/EmailAddress", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchUserNewPassword = async (
  data: PatchUserNewPasswordRequest
) => {
  try {
    const response = await axiosInstance.patch("/User/NewPassword", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
