import { Link } from "react-router-dom";

import { FormField } from "../FormField/FormField.jsx";

import "./Login.css";
import {AppButton} from "../AppButton/AppButton.jsx";

export const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <label className="login__label">Welcome!</label>

                <div className="login__forms">
                    <FormField label="Email" type="email" name="email"/>
                    <FormField label="Password" type="password" name="password"/>

                    <p className="helper-text">
                        Don’t have an account? <Link to="/signup" className="text-link">Sign Up</Link>
                    </p>

                    <div className="login__button">
                        <AppButton label="Log In"/>
                    </div>
                </div>
            </div>
        </div>
    );
}