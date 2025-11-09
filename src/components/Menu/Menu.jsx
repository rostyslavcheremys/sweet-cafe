import { Categories } from "../Categories/Categories.jsx";

import "./Menu.css";

export const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__container">
                <Categories />
            </div>
        </div>
    );
};
