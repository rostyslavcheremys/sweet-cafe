import { FormField } from "../components/Forms/FormField.jsx";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import "../styles/pages.css";

export const Login = () => {
    return (
        <div className="page">
            <label className="page__label">Welcome!</label>

            <div className="page__forms">
                <FormField
                    label="Email"
                    type="email"
                    name="email"
                />

                <FormField
                    label="Password"
                    type="password"
                    name="password"
                />

                <AuthRedirect
                    text="Don’t have an account?"
                    linkText="Sign Up"
                    linkTo="/signup"
                />

                <div className="page__button">
                    <AppButton label="Log In"/>
                </div>
            </div>
        </div>
    );
}