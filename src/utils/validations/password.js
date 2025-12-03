export const getPasswordValidation = () => ({
    required: "Password is required",
    minLength: {
        value: 8,
        message: "At least 8 characters"
    },
    validate: {
        uppercase: v => /[A-Z]/.test(v) || "Include at least one uppercase letter",
        lowercase: v => /[a-z]/.test(v) || "Include at least one lowercase letter",
        number: v => /[0-9]/.test(v) || "Include at least one number",
        symbol: v => /[^A-Za-z0-9]/.test(v) || "Include at least one special character"
    }
});