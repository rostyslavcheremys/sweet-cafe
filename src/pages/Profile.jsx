import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import { useGet } from "../hooks/useGet.js";

import { getUser } from "../../api.js";

import { AuthService } from "../services/authService.js";

export const Profile = () => {
    const navigate = useNavigate();

    const { data: user, isLoading, error } = useGet(getUser, []);

    const handleEdit = () => navigate("/edit");

    const handleAccount = () => navigate("/account");

    const handleOrders = () => navigate("/orders");

    const handleSignOut = () => {
        AuthService.removeToken();
        localStorage.removeItem("user");
        navigate("/login");
    };

    console.log("Token:", AuthService.getToken());

    return (
        <Loader
            isLoading={isLoading}
            error={error}
            errorText="Failed to load profile!"
        >
            <div className="page">
                <span className="page__label">
                    Welcome{user?.name ? `, ${user.name}` : ""}!
                </span>

                <div className="page__button">
                    <AppButton
                        label="Edit"
                        onClick={handleEdit}
                    />
                </div>

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