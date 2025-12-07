import { api } from "./axios.js";

export const CartAPI = {
    get: () => api.get("/cart").then(r => r.data),
    addItem: (id, qty= 1) => api.post("/cart", { menu_item_id:id, total_quantity:qty }).then(r => r.data),
    updateItem: (id, qty) => api.put(`/cart/${id}`,{ total_quantity:qty }).then(r => r.data),
    removeItem: id => api.delete(`/cart/${id}`).then(r => r.data),
    clear: () => api.delete("/cart/clear").then(r => r.data)
}