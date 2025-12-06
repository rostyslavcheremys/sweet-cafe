import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppTable } from "../components/AppTable/AppTable.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { useMessageDialog } from "../hooks/useMessageDialog.js";
import { useGet } from "../hooks/useGet.js";
import { useCartActions } from "../hooks/useCartActions.js";

import { getCartRows } from "../utils/cart/getCartRows.js";

import { CART_COLUMNS } from "../constants/cart/cartColumns.js";

import { getCart } from "../../api.js";

export const Cart = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const { data, isLoading, error } = useGet(getCart, []);

    const { cartItems, increase, decrease, remove, clear } = useCartActions(data, showMessage);

    const handleCheckout = () => navigate("/checkout");

    const rows = getCartRows(cartItems);

    const totalPrice = rows.reduce((sum, r) => sum + r.price * r.quantity, 0);

    return (
        <Loader
            isLoading={isLoading}
            error={error}
            errorText="Failed to load cart!"
        >
            <div className="page">
                <span className="page__label">Cart</span>

                <AppTable
                    columns={CART_COLUMNS}
                    rows={rows}
                    totalPrice={totalPrice}
                    onIncreaseQuantity={increase}
                    onDecreaseQuantity={decrease}
                    onDeleteCartItem={remove}
                    onClearCartItems={clear}
                    showTotal={true}
                />

                <div className="page__button">
                    <AppButton
                        label="Checkout"
                        onClick={handleCheckout}
                        disabled={isLoading}
                    />
                </div>

                <MessageDialog
                    open={messageOpen}
                    handleClose={handleMessageClose}
                    message={message}
                />
            </div>
        </Loader>
    );
};