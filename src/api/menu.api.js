import { api } from "./axios.js";

export const MenuAPI = {
    getByCategory: categoryId => api.get("/menu_items", { params: { category_id: categoryId }}).then(r => r.data.menu_items || []),
    create: data => api.post("/menu_items", { menu_item: data }).then(r => r.data),
    update: (id, data) => api.put(`/menu_items/${id}`, { menu_item: data }).then(r => r.data),
    delete: id => api.delete(`/menu_items/${id}`)
}