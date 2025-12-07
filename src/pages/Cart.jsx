import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Loader } from "../components/Loader/Loader.jsx";
import { AppTable } from "../components/AppTable/AppTable.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";
import { MessageDialog } from "../components/MessageDialog/MessageDialog.jsx";

import { useMessageDialog } from "../hooks/useMessageDialog.js";
import { useGet } from "../hooks/useGet.js";
import { useCartActions } from "../hooks/useCartActions.js";

import { mapCartRows } from "../utils/mappers/mapCartRows.js";
import { getTotalPrice } from "../utils/items/getTotalPrice.js";
import { getErrorText } from "../utils/forms/getErrorText.js";

import { CART_COLUMNS } from "../constants/tableColumns/cartColumns.js";

import { CartAPI } from "../api/index.js";

export const Cart = () => {
    const {
        messageOpen,
        message,
        showMessage,
        handleMessageClose
    } = useMessageDialog();

    const navigate = useNavigate();

    const {
        data,
        isLoading,
        error
    } = useGet(() => CartAPI.get(), []);

    const {
        cartItems,
        increase,
        decrease,
        remove,
        clear
    } = useCartActions(data, showMessage);

    const rows = useMemo(() => mapCartRows(cartItems), [cartItems]);
    const totalPrice = useMemo(() => getTotalPrice(rows), [rows]);

    const handleCheckout = () => navigate("/checkout");

    return (
        <Loader
            isLoading={isLoading}
            error={!!error || !isLoading && rows.length === 0}
            errorText={
                getErrorText({
                    errorFirst: error,
                    textFirst: "Failed to load page!",
                    errorSecond: !isLoading && rows.length === 0,
                    textSecond: "Your cart is empty!"
                })
            }
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