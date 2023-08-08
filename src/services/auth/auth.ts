import axiosInstance from "../axiosInstance";

//LOGIN


export interface LoginRequest {
  password: string;
  email: string;
}
export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

//REGISTER REQUEST

export interface ShelterRegisterRequest {
  shelter: Shelter;
  user: User;
}

export interface Shelter {
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

export interface User {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

//RESET PASSWORD


export interface ResetPasswordSendEmailRequest {
  email: string;
}

export interface ResetPasswordSetNewPasswordRequest {
  password: string;
  confirmPassword: string;
}


export const login = async (loginData: LoginRequest) => {

  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/Auth/loginWeb",
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("error");
  }
};


export const registerShelter = async (registerData: ShelterRegisterRequest) => {
  try {
    const response = await axiosInstance.post(
      "/Auth/shelterRegister",
      registerData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("error");
  }
};


export const resetPasswordSendEmail = async (email: string) => {
  try {
    const response = await axiosInstance.post("/Auth/resetPassword", {
      email
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const resetPasswordSetNewPassword = async (
  resetPasswordSetNewPasswordData: ResetPasswordSetNewPasswordRequest
) => {
  try {
    const response = await axiosInstance.post(
      "/Auth/setNewPassword",
      resetPasswordSetNewPasswordData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

