import { AuthAPI } from "../../api";

export const googleAuth = (showMessage) => {
    try {
        AuthAPI.google().then(res => {
            if (res.data?.authorization_url) {
                window.location.href = res.data.authorization_url;
            } else {
                showMessage("Google authorization URL not found!");
            }
        });
    } catch{
        showMessage("Google auth failed!");
    }
};