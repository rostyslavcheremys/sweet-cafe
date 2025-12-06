import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { requireAuth } from "../../utils/auth/requireAuth.js";

import "./Header.css";

export const Header = () => {
    const navigate = useNavigate();

    return(
        <header>
            <span className="header__title" onClick={() => navigate("/menu")}>Sweet Cafe</span>

            <div className="header__buttons">
                <PersonIcon
                    className="header__icon-user"
                    onClick={() => requireAuth(navigate, "/profile")}
                />

                <LocalMallIcon
                    className="header__icon-cart"
                    onClick={() => requireAuth(navigate, "/cart")}
                />
            </div>
        </header>
    );
}