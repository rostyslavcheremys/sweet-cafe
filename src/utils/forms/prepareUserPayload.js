export const prepareUserPayload = (data) => {
    const payload = { ...data };
    if (!payload.password) delete payload.password;
    delete payload.confirmPassword;
    return payload;
};