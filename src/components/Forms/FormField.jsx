import { useState } from "react";

import { TextField, IconButton, InputAdornment } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Forms.css";

export const FormField = ({ label, type = "text", name, value, className = "", onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="form">
            <label className={`form__label ${className}`}>{label}</label>

            <TextField
                className={`form__field ${className}`}
                variant="outlined"
                type={isPassword && showPassword ? "text" : type}
                name={name}
                value={value}
                onChange={onChange}
                slotProps={{
                    input: isPassword
                        ? {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> :  <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                        : {},
                }}
            />
        </div>
    );
};