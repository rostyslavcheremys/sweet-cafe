export const getUserPayload = (data) => {
    const payload = {
        name: data.name,
        phone: data.phone
    };

    if (data.password) {
        payload.current_password = data.currentPassword;
        payload.new_password = data.password;
        payload.password_confirmation = data.confirmPassword;
    }

    return payload;
};
