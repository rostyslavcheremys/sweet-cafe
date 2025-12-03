import { Button } from "@mui/material";

import "./AppButton.css";

export const AppButton = ({ label, type, onClick, disabled }) => {
    return (
        <Button
            className="app-button"
            variant="contained"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </Button>
    );
}
