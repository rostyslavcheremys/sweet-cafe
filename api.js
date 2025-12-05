import axios from "axios";

import { AuthService } from "./src/services/authService.js";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(config => {
    const token = AuthService.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const signup = (data) => api.post("/auth/signup", data);

export const login = (data) => api.post("/auth/login", data);

export const getCategories = () =>
    api.get("/categories").then(res => res.data.categories || []);

export const getMenuItemsByCategory = (categoryId) =>
    api.get("/menu_items", { params: { category_id: categoryId } })
        .then(res => res.data.menu_items || []);

export const addToCart = (menuItemId, quantity = 1) =>
    api.post("/cart", { menu_item_id: menuItemId, total_quantity: quantity })
        .then(res => res.data);

export const postDelivery = (payload) =>
    api.post("/deliveries", payload).then(res => res.data);

export const getUser = () => api.get("/auth/me")
    .then(res => {
        AuthService.setUser(res.data.user);
        return res.data.user;
    });

export const patchUser = (userId, data, fullUpdate = false) => {
    const method = fullUpdate ? "put" : "patch";

    return api[method](`/users/${userId}`, { user: data })
        .then(res => {
            AuthService.setUser(res.data.user);
            return res.data;
        });
};