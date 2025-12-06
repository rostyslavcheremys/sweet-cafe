export const getDefaultValues = (user = {}) => ({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    currentPassword: "",
    password: "",
    confirmPassword: ""
});