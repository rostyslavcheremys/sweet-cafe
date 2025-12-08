import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
    Loader,
    InputController,
    AppButton,
    AuthRedirect,
    MessageDialog
} from "../components";

import {
    useMessageDialog,
    usePost
} from "../hooks";

import {
    getUserValues,
    submitFormData,
    getNameValidation,
    getEmailValidation,
    getPhoneNumberValidation,
    getPasswordValidation,
    getConfirmPasswordValidation
} from "../utils";

import { AuthAPI } from "../api";

export const Signup = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        watch
    } = useForm({
        defaultValues: getUserValues(),
        mode: "onChange"
    });

    const {
        postData,
        isLoading,
        error
    } = usePost((data) => AuthAPI.signup(data));

    const onSubmitSignup = submitFormData(
        postData,
        showMessage,
        "Sign up successful!",
        "Sign up failed!",
        navigate,
        "/menu"
    );

    return (
        <Loader
            isLoading={isLoading}
            error={error}
            errorText="Failed to load page!"
        >
            <div className="page">
                <span className="page__title">Welcome!</span>

                <form className="page__forms" onSubmit={handleSubmit(onSubmitSignup)}>
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
                        name="password"
                        label="Password*"
                        type="password"
                        rules={getPasswordValidation()}
                    />

                    <InputController
                        control={control}
                        name="confirmPassword"
                        label="Confirm Password*"
                        type="password"
                        rules={getConfirmPasswordValidation(() => watch("password"))}
                    />

                    <AuthRedirect
                        text="Already have an account?"
                        linkText="Log In"
                        linkTo="/login"
                    />

                    <div className="page__button">
                        <AppButton
                            type="submit"
                            label="Sign Up"
                            disabled={isLoading}
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