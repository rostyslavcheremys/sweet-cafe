import { AuthService } from "../../services/authService.js";

export const handleFormSubmit = (
    postData,
    showMessage,
    successMessage,
    errorMessage,
    navigate
) => async (formData) => {
    try {
        const response = await postData(formData);

        const data = response.data;

        if (data?.token) {
            AuthService.setToken(data.token);
            AuthService.setUser(data.user);
            showMessage(successMessage, () => navigate("/menu"));
        }
    } catch {
        showMessage(errorMessage);
    }
}