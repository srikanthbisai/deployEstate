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

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized, redirecting to login...");
      // Optionally, redirect to login page or show a message
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiRequest;
