import { FormField } from "../FormField/FormField.jsx";
import { AppButton } from "../AppButton/AppButton.jsx";
import { AuthRedirect } from "../AuthRedirect/AuthRedirect.jsx";

import "./Login.css";

export const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <label className="login__label">Welcome!</label>

                <div className="login__forms">
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

                    <div className="login__button">
                        <AppButton label="Log In"/>
                    </div>
                </div>
            </div>
        </div>
    );
}