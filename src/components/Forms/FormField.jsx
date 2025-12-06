import { useState, forwardRef } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Forms.css";

export const FormField = forwardRef(({ label, type, name, value, onChange, onBlur, className, disabled }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="form">
            <label className={`form__label ${className}`}>{label}</label>

            <TextField
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`form__field ${className}`}
                variant="outlined"
                type={isPassword && showPassword ? "text" : type}
                disabled={disabled}
                slotProps={{
                    input: isPassword
                        ? {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(prev => !prev)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                        : {}
                }}
            />
        </div>
    );
});