import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { FormController } from "../components/FormController/FormController.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { usePost } from "../hooks/usePost.js";
import { useMessageDialog } from "../hooks/useMessageDialog.js";

import { getNameValidation } from "../utils/validations/name.js";
import { getEmailValidation } from "../utils/validations/email.js";
import { getPhoneNumberValidation } from "../utils/validations/phoneNumber.js";
import { getPasswordValidation } from "../utils/validations/password.js";
import { getConfirmPasswordValidation } from "../utils/validations/confirmPassword.js";
import { handleFormSubmit } from "../utils/forms/handleFormSubmit.js";

import { signup } from "../../api.js";

export const Signup = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        },
        mode: "onChange"
    });

    const { postData, isLoading } = usePost(signup);

    const onSignupSubmit = handleFormSubmit(
        postData,
        showMessage,
        "Account created successfully!",
        "Signup failed!",
        navigate
    );

    return (
        <Loader isLoading={isLoading}>
            <div className="page">
                <span className="page__label">Welcome!</span>

                <form className="page__forms" onSubmit={handleSubmit(onSignupSubmit)}>
                    <FormController
                        control={control}
                        name="name"
                        label="Name"
                        rules={getNameValidation()}
                    />

                    <FormController
                        control={control}
                        name="email"
                        label="Email"
                        type="email"
                        rules={getEmailValidation()}
                    />

                    <FormController
                        control={control}
                        name="phone"
                        label="Phone Number"
                        rules={getPhoneNumberValidation()}
                    />

                    <FormController
                        control={control}
                        name="password"
                        label="Password"
                        type="password"
                        rules={getPasswordValidation()}
                    />

                    <FormController
                        control={control}
                        name="confirmPassword"
                        label="Confirm Password"
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