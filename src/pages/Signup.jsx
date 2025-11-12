import { FormField } from "../components/Forms/FormField.jsx";
import { AuthRedirect } from "../components/AuthRedirect/AuthRedirect.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import "../styles/pages.css";

export const Signup = () => {
    return (
        <div className="page">
            <label className="page__label">Welcome!</label>

            <div className="page__forms">
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

                <div className="page__button">
                    <AppButton label="Sign Up"/>
                </div>
            </div>
        </div>
    );
}