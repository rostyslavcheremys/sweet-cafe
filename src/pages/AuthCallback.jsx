import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMessageDialog } from "../hooks";

import { AuthAPI } from "../api";
import { AuthService } from "../services/authService";

import { Loader } from "../components";

export const AuthCallback = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessageDialog();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
            showMessage("No code found in URL!");
            navigate("/login");
            return;
        }

        const exchangeCode = async () => {
            try {
                const res = await AuthAPI.exchangeGoogleCode({ code });

                const token = res.data.token;
                const user = res.data.user;

                if (!token) {
                    showMessage("Failed to get token from server!");
                    navigate("/login");
                    return;
                }

                AuthService.setToken(token);

                if (user) {
                    AuthService.setUser(user);
                }

                navigate("/menu");
            } catch {
                showMessage("Google login failed!");
                navigate("/login");
            }
        };

        exchangeCode();
    }, [navigate, showMessage]);

    return <Loader isLoading={true} />;
};
