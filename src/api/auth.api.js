import { api } from "./axios.js";

export const AuthAPI = {
    signup: data => api.post("/auth/signup", data),
    login: data => api.post("/auth/login", data),
    me: () => api.get("/auth/me").then(r => r.data.user),
    update: data => api.patch("/auth/me", data)
}