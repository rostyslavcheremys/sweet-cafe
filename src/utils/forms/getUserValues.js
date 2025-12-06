export const getUserValues = (user = {}) => ({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    currentPassword: "",
    password: "",
    confirmPassword: ""
});