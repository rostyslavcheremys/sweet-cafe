import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { InputController } from "../components/FormControllers/InputController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { useMessageDialog } from "../hooks/useMessageDialog.js";
import { useGet } from "../hooks/useGet.js";
import { usePost } from "../hooks/usePost.js";

import { getDefaultValues } from "../utils/forms/getDefaultValues.js";
import { prepareUserPayload } from "../utils/forms/prepareUserPayload.js";
import { submitFormData } from "../utils/forms/submitFormData.js";
import { getNameValidation } from "../utils/validations/name.js";
import { getEmailValidation } from "../utils/validations/email.js";
import { getPhoneNumberValidation } from "../utils/validations/phoneNumber.js";
import { getPasswordValidation } from "../utils/validations/password.js";
import { getConfirmPasswordValidation } from "../utils/validations/confirmPassword.js";

import { getUser, patchUser } from "../../api.js";

export const Account = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { data: user, isLoading: loadingUser } = useGet(getUser, []);

    const { control, handleSubmit, watch, reset } = useForm({
        defaultValues: {},
        mode: "onChange"
    });

    const { postData, isLoading: saving } = usePost((data) =>
            patchUser(user.id, prepareUserPayload(data))
    );

    const onSave = submitFormData(
        postData,
        showMessage,
        "Account update successful!",
        "Account update failed!",
        navigate,
        "/profile"
    );

    useEffect(() => {
        if (user) reset(getDefaultValues(user));
    }, [user, reset]);

    return (
        <Loader isLoading={loadingUser || saving}>
            <div className="page">
                <span className="page__label">Account</span>

                <form className="page__forms" onSubmit={handleSubmit(onSave)}>
                    <InputController
                        control={control}
                        name="name"
                        label="Name*"
                        rules={getNameValidation()}
                    />

                    <InputController
                        control={control}
                        name="email"
                        label="Email*"
                        type="email"
                        rules={getEmailValidation()}
                    />

                    <InputController
                        control={control}
                        name="phone"
                        label="Phone Number*"
                        rules={getPhoneNumberValidation()}
                    />

                    <InputController
                        control={control}
                        name="currentPassword"
                        label="Current Password"
                        type="password"
                        rules={{
                            validate: () => {
                                const password = watch("password"); // дивимось, чи змінюють пароль
                                // якщо пароль міняють — currentPassword обов'язковий
                                if (password && !watch("currentPassword")) return "Enter your current password";
                                return true;
                            }
                        }}
                    />

                    <InputController
                        control={control}
                        name="password"
                        label="New Password"
                        type="password"
                        rules={{
                            validate: (value) => {
                                // якщо не міняємо пароль — не валідимо
                                if (!value) return true;
                                return value.length >= 6 || "Password must be at least 6 characters";
                            }
                        }}
                    />

                    <InputController
                        control={control}
                        name="confirmPassword"
                        label="Confirm New Password"
                        type="password"
                        rules={{
                            validate: (value) => {
                                const password = watch("password");
                                // confirmPassword потрібен лише при зміні пароля
                                if (!password) return true;
                                if (!value) return "Confirm your new password";
                                return value === password || "Passwords do not match";
                            }
                        }}
                    />


                    <div className="page__button">
                        <AppButton
                            type="submit"
                            label="Save"
                            disabled={loadingUser || saving}
                        />
                    </div>
                </form>

                <MessageDialog
                    open={messageOpen}
                    handleClose={handleMessageClose}
                    message={message}
                />
            </div>
        </Loader>
    );
};