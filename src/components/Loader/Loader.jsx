import { CircularProgress } from "@mui/material";

import "./Loader.css";

export const Loader = ({ loading, error, errorText, children }) => {
    if (loading) {
        return (
            <div className="loader">
                <CircularProgress className="loader__spinner"/>
            </div>
        );
    }

    if (error) {
        return <div className="loader__error">{errorText}</div>
    }

    return <>{children}</>;
};
