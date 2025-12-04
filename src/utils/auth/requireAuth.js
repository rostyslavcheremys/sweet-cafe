import { AuthService } from "../../services/authService.js";

export const requireAuth = (navigate, path) => {
    AuthService.getToken() ?  navigate(path) : navigate("/login");
};