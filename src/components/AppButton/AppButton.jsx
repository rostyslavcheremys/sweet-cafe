import { Button } from "@mui/material";

import "./AppButton.css";

export const AppButton = ({ label, onClick }) => {
    return (
        <Button
            className="app-button"
            variant="contained"
            onClick={onClick}
        >
            {label}
        </Button>
    );
}
