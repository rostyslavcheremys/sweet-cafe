import { Button } from "@mui/material";

import "./AppButton.css";

export const AppButton = ({ label }) => {
    return (
        <Button
            className="app-button"
            variant="contained" >
            {label}
        </Button>
    );
}
