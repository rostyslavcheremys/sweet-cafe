import { AuthService } from "../../services/authService.js";

export const handleFormSubmit = (
    postData,
    showMessage,
    successMessage,
    errorMessage,
    navigate
) => async (formData) => {
    try {
        const data = await postData(formData);

        if (data?.token) {
            AuthService.setToken(data.token);
            AuthService.setUser(data.user);
            showMessage(successMessage, () => navigate("/menu"));
        }
    } catch {
        showMessage(errorMessage);
    }
}