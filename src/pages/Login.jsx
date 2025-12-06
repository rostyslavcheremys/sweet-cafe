import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { InputController } from "../components/FormControllers/InputController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { usePost } from "../hooks/usePost.js";
import { useMessageDialog } from "../hooks/useMessageDialog.js";

import { getUserValues } from "../utils/forms/getUserValues.js";
import { submitFormData } from "../utils/forms/submitFormData.js";
import { getEmailValidation } from "../utils/validations/email.js";
import { getPasswordValidation } from "../utils/validations/password.js";

import { login } from "../../api.js";

export const Login = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: getUserValues(),
        mode: "onChange"
    });

    const { postData, isLoading } = usePost(login);

    const onSubmitLogin = submitFormData(
        postData,
        showMessage,
        "Login successful!",
        "Login failed!",
        navigate,
        "/menu"
    );

    return (
        <Loader isLoading={isLoading}>
            <div className="page">
                <span className="page__label">Welcome!</span>

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

                    <div className="page__button">
                        <AppButton
                            type="submit"
                            label="Log In"
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