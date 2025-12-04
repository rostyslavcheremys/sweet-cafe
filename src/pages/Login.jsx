import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { FormController } from "../components/FormController/FormController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { usePost } from "../hooks/usePost.js";
import { useMessageDialog } from "../hooks/useMessageDialog.js";

import { getDefaultValues } from "../utils/forms/getDefaultValues.js";
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
        defaultValues: getDefaultValues(),
        mode: "onChange"
    });

    const { postData, isLoading } = usePost(login);

    const onLoginSubmit = submitFormData(
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

                <form className="page__forms" onSubmit={handleSubmit(onLoginSubmit)}>
                    <FormController
                        control={control}
                        name="email"
                        label="Email"
                        type="email"
                        rules={getEmailValidation()}
                    />

                    <FormController
                        control={control}
                        name="password"
                        label="Password"
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