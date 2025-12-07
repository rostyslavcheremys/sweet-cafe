import { api } from "./axios.js";

export const MenuAPI = {
    getByCategory: categoryId => api.get("/menu_items", { params: { category_id: categoryId }}).then(r => r.data.menu_items || [])
}