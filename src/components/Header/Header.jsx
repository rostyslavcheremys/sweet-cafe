import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import "./Header.css";

export const Header = () => {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate("/");
    };

    const handleUserClick = () => {
        navigate("/login");
    };

    const handleCartClick = () => {
        navigate("/cart");
    }

    return(
        <header>
            <label className="header__label" onClick={handleMenuClick}>Sweet Cafe</label>

            <div className="header__buttons">
                <PersonIcon className="header__icon-user" onClick={handleUserClick} />
                <LocalMallIcon className="header__icon-cart" onClick={handleCartClick} />
            </div>
        </header>
    );
}