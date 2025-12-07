import { useNavigate } from "react-router-dom";

import {
    PersonIcon,
    LocalMallIcon
} from "../../libs/mui-icons.js";

import { requireAuth } from "../../utils";

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