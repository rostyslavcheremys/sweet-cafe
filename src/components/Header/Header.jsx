import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import "./Header.css";

export const Header = () => {
    return(
        <header>
            <h1 className="header__label">Sweet Cafe</h1>

            <div className="header__buttons">
                <PersonIcon className="header__icon-user"/>
                <LocalMallIcon className="header__icon-cart"/>
            </div>
        </header>
    );
}