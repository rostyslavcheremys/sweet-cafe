import { useNavigate } from "react-router-dom";

import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import "./Header.css";

export const Header = () => {
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate("/");
    };

    const handleUser = () => {
        navigate("/login");
    };

    const handleCart = () => {
        navigate("/cart");
    }

    return(
        <header>
            <label className="header__label" onClick={handleMenu}>Sweet Cafe</label>

            <div className="header__buttons">
                <PersonIcon className="header__icon-user" onClick={handleUser} />
                <LocalMallIcon className="header__icon-cart" onClick={handleCart} />
            </div>
        </header>
    );
}