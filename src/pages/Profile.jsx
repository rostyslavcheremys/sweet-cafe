import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import { useGet } from "../hooks/useGet.js";

import { AuthService } from "../services/authService.js";

import { AuthAPI } from "../api/index.js";

export const Profile = () => {
    const navigate = useNavigate();

    const {
        data: user,
        isLoading,
        error
    } = useGet(() => AuthAPI.me(), []);

    const handleEdit = () => navigate("/edit");

    const handleAccount = () => navigate("/account");

    const handleOrders = () => navigate("/orders");

    const handleSignOut = () => {
        AuthService.removeToken();
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Loader
            isLoading={isLoading}
            error={error}
            errorText="Failed to load page!"
        >
            <div className="page">
                <span className="page__label">
                    Welcome{user?.name ? `, ${user.name}` : ""}!
                </span>

                {user?.role === "admin" && (
                    <div className="page__button">
                        <AppButton
                            label="Edit"
                            onClick={handleEdit}
                        />
                    </div>
                )}

                <div className="page__button">
                    <AppButton
                        label="Account"
                        onClick={handleAccount}
                    />
                </div>

                <div className="page__button">
                    <AppButton
                        label="Orders"
                        onClick={handleOrders}
                    />
                </div>

                <div className="page__button">
                    <AppButton
                        label="Sign Out"
                        onClick={handleSignOut}
                    />
                </div>
            </div>
        </Loader>
    );
}