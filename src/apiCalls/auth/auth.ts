import axiosInstance from "../axiosInstance";

//LOGIN RESPONSE

interface LoginResponse {
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

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post<LoginResponse>("/Auth/loginWeb", {
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error(error);
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
  }
};
