import { useState } from "react";

import { FormField } from "../components/Forms/FormField.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import "../styles/pages.css";

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
        <div className="page">
            <label className="page__label">Account</label>

            <div className="page__forms">
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

                <div className="page__button">
                    <AppButton label="Save" onClick={handleSave}/>
                </div>
            </div>
        </div>
    );
}