import axios, { AxiosError } from "axios";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "router/router";
import toastService from "singletons/toastService";

type CustomErrorObject = {
  Code: string;
  Description: string;
};
interface CustomErrorData {
  errors: CustomErrorObject[];
}

export interface ExtendedAxiosError extends AxiosError<CustomErrorData> {}

export interface ExtendedAxiosError2 extends AxiosError<CustomErrorObject> {}

const isMockEndpointsEnabled =
  (process.env.REACT_APP_mockEndpoints as string) === "true";
const apiAddress = process.env.REACT_APP_API_BASE_URL as string;
const mockAddress = process.env.REACT_APP_mockBaseURL as string;

const baseURL = !isMockEndpointsEnabled ? mockAddress : apiAddress;

export const mockInstance = axios.create({
  baseURL: process.env.REACT_APP_mockBaseURL as string,
  timeout: 5000,
});

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;

      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        try {
          const refreshResponse = await axiosInstance.post("/Auth/useToken", {
            accessToken,
            refreshToken,
          });
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);

          await new Promise((resolve) => setTimeout(resolve, 400));
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          toastService.showToast(t("loginTokenExpired"), "error");
          setTimeout(() => {
            if (window.location.pathname !== "/login") {
              window.location.href = "/";
            }
          }, 3000);
          console.error(refreshError);
        }
      }
    } else if (error.code === "ERR_NETWORK") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      toastService.showToast(t("errNetwork"), "error");
      setTimeout(() => {
        if (window.location.pathname !== "/login") {
          window.location.href = "/";
        }
      }, 3000);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;