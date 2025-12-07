import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
    Loader,
    InputController,
    AppButton,
    MessageDialog
} from "../components";

import {
    useMessageDialog,
    useGet,
    usePost
} from "../hooks";

import {
    getErrorText,
    getUserValues,
    submitFormData,
    getUserPayload,
    getNameValidation,
    getEmailValidation,
    getPhoneNumberValidation,
    getOptionalPasswordValidation,
    getOptionalConfirmPasswordValidation
} from "../utils";

import { AuthAPI } from "../api";

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
                <span className="page__title">Account</span>

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