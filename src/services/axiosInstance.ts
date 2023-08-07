import axios, { AxiosError } from "axios";


const isMockEndpointsEnabled = process.env.REACT_APP_mockEndpoints == "true";

const baseURL = isMockEndpointsEnabled
  ? process.env.REACT_APP_mockBaseURL
  : process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
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
          if (axios.isAxiosError(error) && error.response?.status === 400) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
          }
          console.error(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;