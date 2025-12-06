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
import { getNameValidation } from "../utils/validations/name.js";
import { getEmailValidation } from "../utils/validations/email.js";
import { getPhoneNumberValidation } from "../utils/validations/phoneNumber.js";
import { getPasswordValidation } from "../utils/validations/password.js";
import { getConfirmPasswordValidation } from "../utils/validations/confirmPassword.js";

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
        defaultValues: getUserValues(),
        mode: "onChange"
    });

    const { postData, isLoading } = usePost(signup);

    const onSubmitSignup = submitFormData(
        postData,
        showMessage,
        "Signup successful!",
        "Signup failed!",
        navigate,
        "/menu"
    );

    return (
        <Loader isLoading={isLoading}>
            <div className="page">
                <span className="page__label">Welcome!</span>

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