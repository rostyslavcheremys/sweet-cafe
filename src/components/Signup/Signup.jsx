import { FormField } from "../FormField/FormField.jsx";
import { AppButton } from "../AppButton/AppButton.jsx";
import { AuthRedirect } from "../AuthRedirect/AuthRedirect.jsx";

import "./Signup.css";

export const Signup = () => {
    return (
        <div className="signup">
            <div className="signup__container">
                <label className="signup__label">Welcome!</label>

                <div className="signup__forms">
                    <FormField
                        label="Name"
                        type="text"
                        name="name"
                    />

                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                    />

                    <FormField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                    />

                    <FormField
                        label="Password"
                        type="password"
                        name="password"
                    />

                    <FormField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                    />

                    <AuthRedirect
                        text="Already have an account?"
                        linkText="Log In"
                        linkTo="/login"
                    />

                    <div className="signup__button">
                        <AppButton label="Sign Up"/>
                    </div>
                </div>
            </div>
        </div>
    );
}