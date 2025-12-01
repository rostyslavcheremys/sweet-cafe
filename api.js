import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const getMenuItems = () => api.get("/menu_items");

/*export const getMenuItemById = (id) => api.get(`/menu_items/${id}`);*/

export const getCategories = () => api.get("/categories");




