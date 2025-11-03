import { FormControl, Select, MenuItem } from "@mui/material";

export const FormSelect = ({ label, name, value, onChange, options = [] }) => {
    return (
        <div className="form-field">
            <label className="form-field__label">{label}</label>

            <FormControl className="form-field__input">
                <Select
                    value={value}
                    onChange={onChange}
                    name={name}
                    MenuProps={{
                        PaperProps: {
                            className: "form-field__menu"
                        }
                    }}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            className="form-field__menu-item"
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
