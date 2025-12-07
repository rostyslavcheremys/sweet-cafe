import axios from "axios";
import { AuthService } from "../services/authService.js";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(config => {
    const token = AuthService.getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});