import { Controller } from "react-hook-form";

import { FormField } from "../Forms/FormField.jsx";

import "./FormController.css";

export const FormController = ({ control, name, label, type, rules }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <>
                    <FormField label={label} type={type} {...field} />
                    {fieldState.error && <p className="form-controller__error">{fieldState.error.message}</p>}
                </>
            )}
        />
    );
};