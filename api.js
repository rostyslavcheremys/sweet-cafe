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


export const getCart = () => api.get("/cart").then(res => res.data);

export const addToCart = (menu_item_id, total_quantity = 1) =>
    api.post("/cart", { menu_item_id, total_quantity }).then(res => res.data);

export const updateCartItem = (id, total_quantity) =>
    api.put(`/cart/${id}`, { total_quantity }).then(res => res.data);

export const deleteCartItem = (id) =>
    api.delete(`/cart/${id}`).then(res => res.data);

export const clearCart = () =>
    api.delete("/cart/clear").then(res => res.data);

export const createDelivery = (orderId, payload) => {
    return api.post("/deliveries", { order_id: orderId, delivery: payload });
};


export const createOrder = (payload) =>
    api.post("/orders", payload).then(res => res.data);

export const getOrders = (payload) =>
    api.get("/orders", payload).then(res => res.data);

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