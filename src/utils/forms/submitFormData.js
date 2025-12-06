import { AuthService } from "../../services/authService.js";

export const submitFormData = (
    postData,
    showMessage,
    successMessage,
    errorMessage,
    navigate,
    path,
) => async (formData) => {
    try {
        const data = await postData(formData);

        if (data?.token) {
            AuthService.setToken(data.token);
            AuthService.setUser(data.user);
        }

        showMessage(successMessage, () => {
            if (path) navigate(path);
        });
    } catch {
        showMessage(errorMessage);
    }
}