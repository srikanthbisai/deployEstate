import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL;

const apiRequest = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
});

export default apiRequest;
