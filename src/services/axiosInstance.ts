import axios, { AxiosError } from "axios";


const isMockEndpointsEnabled =
  (process.env.REACT_APP_mockEndpoints as string) === "true";
const apiAddress = process.env.REACT_APP_API_BASE_URL as string;
const mockAddress = process.env.REACT_APP_mockBaseURL as string;

const baseURL = isMockEndpointsEnabled ? mockAddress : apiAddress;

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
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (accessToken && refreshToken) {
        try {
          const response = await axiosInstance.post("/Auth/useToken", {
            accessToken,
            refreshToken,
          });
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
        } catch (error: unknown) {
          //if (axios.isAxiosError(error) && error.response?.status === 400) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          //}
          console.error(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;