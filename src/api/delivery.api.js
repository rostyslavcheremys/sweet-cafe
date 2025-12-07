import { api } from "./axios.js";

export const DeliveryAPI = {
    create: (orderId,payload) => api.post("/deliveries",{ order_id:orderId, delivery:payload })
}