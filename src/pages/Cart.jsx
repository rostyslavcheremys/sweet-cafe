import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
    Loader,
    CartTable,
    AppButton,
    MessageDialog
} from "../components";

import {
    useMessageDialog,
    useGet,
    useCartActions
} from "../hooks";

import {
    mapCartRows,
    getTotalPrice,
    getErrorText
} from "../utils";

import { CART_COLUMNS } from "../constants";

import { CartAPI } from "../api";

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
                <span className="page__title">Cart</span>

                <CartTable
                    columns={CART_COLUMNS}
                    rows={rows}
                    totalPrice={totalPrice}
                    onIncrease={increase}
                    onDecrease={decrease}
                    onRemove={remove}
                    onClear={clear}
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