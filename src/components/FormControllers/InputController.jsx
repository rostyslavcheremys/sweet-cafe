import { Controller } from "react-hook-form";

import { FormField } from "../Forms/FormField.jsx";

import "./FormControllers.css";

export const InputController = ({ control, name, label, type, rules, disabled }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <FormField label={label} type={type} {...field} disabled={disabled} />
                    {fieldState.error && <p className="form-controller__error">{fieldState.error.message}</p>}
                </>
            )}
        />
    );
};