import { api } from "./axios.js";

export const CategoriesAPI = {
    getAll: () => api.get("/categories").then(r => r.data.categories || []),
}