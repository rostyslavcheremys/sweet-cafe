import { Link } from "react-router-dom";

export const AuthRedirect = ({ text, linkText, linkTo }) => {
    return (
        <p className="auth-redirect">
            {text} <Link to={linkTo} className="auth-redirect__link">{linkText}</Link>
        </p>
    );
};
