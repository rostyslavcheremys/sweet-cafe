import { useState } from "react";
import { FormField } from "../FormField/FormField.jsx";
import { AppButton } from "../AppButton/AppButton.jsx";

import "./Account.css";

export const Account = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    }

    const handleSave = () => {
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        console.log("Saved:", form);
    }

    return (
        <div className="account">
            <div className="account__container">
                <label className="account__label">Account</label>

                <div className="account__forms">
                    <FormField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <FormField
                        label="New Password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />

                    {/*{error && <p className="account__error">{error}</p>}*/}

                    <div className="account__button">
                        <AppButton label="Save" onClick={handleSave} />
                    </div>
                </div>
            </div>
        </div>
    );
}