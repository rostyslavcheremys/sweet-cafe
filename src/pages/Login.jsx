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
    usePost,
    useMessageDialog
} from "../hooks";

import {
    googleAuth,
    getUserValues,
    submitFormData,
    getEmailValidation,
    getPasswordValidation
} from "../utils";

import { AuthAPI } from "../api";

export const Login = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const {
        control,
        handleSubmit
    } = useForm({
        defaultValues: getUserValues(),
        mode: "onChange"
    });

    const {
        postData,
        isLoading,
        error
    } = usePost((data) => AuthAPI.login(data));

    const onSubmitLogin = submitFormData(
        postData,
        showMessage,
        "Log in successful!",
        "Log in failed!",
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

                <form className="page__forms" onSubmit={handleSubmit(onSubmitLogin)}>
                    <InputController
                        control={control}
                        name="email"
                        label="Email*"
                        type="email"
                        rules={getEmailValidation()}
                    />

                    <InputController
                        control={control}
                        name="password"
                        label="Password*"
                        type="password"
                        rules={getPasswordValidation()}
                    />

                    <AuthRedirect
                        text="Don’t have an account?"
                        linkText="Sign Up"
                        linkTo="/signup"
                    />

                    <div className="page__buttons">
                        <AppButton
                            type="submit"
                            label="Log In"
                            disabled={isLoading}
                        />

                        <span className="page__separator">OR</span>

                        <AppButton
                            label="Google"
                            disabled={isLoading}
                            onClick={() => googleAuth(showMessage)}
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