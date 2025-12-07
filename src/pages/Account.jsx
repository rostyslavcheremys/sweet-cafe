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

import { getErrorText } from "../utils/forms/getErrorText.js";
import { getUserValues } from "../utils/forms/getUserValues.js";
import { getUserPayload } from "../utils/payloads/getUserPayload.js";
import { submitFormData } from "../utils/forms/submitFormData.js";
import { getNameValidation } from "../utils/validations/name.js";
import { getEmailValidation } from "../utils/validations/email.js";
import { getPhoneNumberValidation } from "../utils/validations/phoneNumber.js";
import { getOptionalPasswordValidation } from "../utils/validations/optionalPassword.js";
import { getOptionalConfirmPasswordValidation } from "../utils/validations/optionalConfirmPassword.js";

import { AuthAPI } from "../api/index.js";

export const Account = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const {
        data: user,
        isLoading: loadingUser,
        error: errorUser
    } = useGet(() => AuthAPI.me(), []);

    const {
        control,
        handleSubmit,
        watch,
        reset
    } = useForm({
        defaultValues: getUserValues(user || {}),
        mode: "onChange"
    });

    const {
        postData,
        isLoading: isSaving,
        error: errorSaving
    } = usePost((data) => AuthAPI.update(getUserPayload(data)));

    const onSave = submitFormData(
        postData,
        showMessage,
        "Account update successful!",
        "Account update failed!",
        navigate,
        "/profile"
    );

    useEffect(() => {
        if (user) reset(getUserValues(user));
    }, [user, reset]);

    return (
        <Loader
            isLoading={loadingUser || isSaving}
            error={errorUser || errorSaving}
            errorText={
                getErrorText({
                    errorFirst: errorUser,
                    textFirst: "Failed to load page!",
                    errorSecond: errorSaving,
                    textSecond: "Failed to save!"
                })
            }
        >
            <div className="page">
                <span className="page__label">Account</span>

                <form className="page__forms" onSubmit={handleSubmit(onSave)}>
                    <InputController
                        control={control}
                        name="name"
                        label="Name"
                        rules={getNameValidation()}
                    />

                    <InputController
                        control={control}
                        name="email"
                        label="Email"
                        type="email"
                        disabled={true}
                        rules={getEmailValidation()}
                    />

                    <InputController
                        control={control}
                        name="phone"
                        label="Phone Number"
                        rules={getPhoneNumberValidation()}
                    />

                    <InputController
                        control={control}
                        name="currentPassword"
                        label="Current Password"
                        type="password"
                        rules={getOptionalPasswordValidation()}
                    />

                    <InputController
                        control={control}
                        name="password"
                        label="New Password"
                        type="password"
                        rules={getOptionalPasswordValidation()}
                    />

                    <InputController
                        control={control}
                        name="confirmPassword"
                        label="Confirm New Password"
                        type="password"
                        rules={getOptionalConfirmPasswordValidation(() => watch("password"))}
                    />

                    <div className="page__button">
                        <AppButton
                            type="submit"
                            label="Save"
                            disabled={loadingUser || isSaving}
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