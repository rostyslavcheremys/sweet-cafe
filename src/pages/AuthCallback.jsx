import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMessageDialog } from "../hooks";

import { AuthAPI } from "../api";

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

        const exchangeCode = async (code) => {
            try {
                const res = await AuthAPI.exchangeGoogleCode({ code });
                const token = res.data.token;

                if (token) {
                    localStorage.setItem("token", token);
                    navigate("/menu");
                } else {
                    showMessage("Failed to get token from server!");
                    navigate("/login");
                }
            } catch {
                showMessage("Google login failed!");
                navigate("/login");
            }
        };

        exchangeCode(code);
    }, [navigate, showMessage]);

    return <Loader isLoading={true} />;
};