import { api } from "./axios.js";

export const OrdersAPI = {
    getAll: () => api.get("/orders").then(r => r.data),
    getById: id => api.get(`/orders/${id}`).then(r => r.data.order),
    create: data => api.post("/orders", data).then(r => r.data)
}