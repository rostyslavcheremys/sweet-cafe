import { useState } from "react";

import { getDeliveryPayload } from "../utils/payloads/getDeliveryPayload.js";
import { getOrderPayload } from "../utils/payloads/getOrderPayload.js";

import { createOrder, createDelivery, clearCart } from "../../api.js";

export const useCheckout = (cartItems = [], showMessage, navigate) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmitOrder = async (formData) => {
        if (!cartItems || !cartItems.length) {
            showMessage("Your cart is empty!");
            return;
        }

        setIsSubmitting(true);

        try {
            const orderPayload = getOrderPayload(cartItems, formData);
            const createdOrder = await createOrder(orderPayload);

            const deliveryPayload = getDeliveryPayload(formData);
            console.log("Delivery payload:", deliveryPayload);
            await createDelivery(createdOrder.order.id, deliveryPayload);

            await clearCart();

            showMessage("Order placed successfully!", () => navigate("/menu"));

        } catch {
            showMessage("Order failed!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { onSubmitOrder, isSubmitting };
};
