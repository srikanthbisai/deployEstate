import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL;

const apiRequest = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
});

apiRequest.interceptors.request.use(
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

export default apiRequest;
