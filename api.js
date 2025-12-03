import axios from "axios";
import { AuthService } from "./src/services/authService.js";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const signup = (data) => api.post("/auth/signup", data);

export const login = (data) => api.post("/auth/login", data);

export const getMenuItems = () => api.get("/menu_items");

export const getCategories = () => api.get("/categories");

export const getUser = () => {
    const token = AuthService.getToken();
    console.log(token);
    if (!token) return Promise.resolve({ data: null });

    return api.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => {
            AuthService.setUser(res.data.user);
            return { data: res.data.user };
        })
        .catch(error => {
            console.error("Failed to fetch user", error);
            return { data: null };
        });
};