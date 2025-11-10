import { AppTable } from "../AppTable/AppTable.jsx";

import "./Cart.css";

export const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__container">
                <label className="cart__label">Cart</label>

                <AppTable />
            </div>
        </div>
    );
};
