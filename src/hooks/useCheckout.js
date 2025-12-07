import { useState } from "react";

import { getDeliveryPayload } from "../utils/payloads/getDeliveryPayload.js";
import { getOrderPayload } from "../utils/payloads/getOrderPayload.js";

import { OrdersAPI, DeliveryAPI, CartAPI } from "../api/index.js";

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
            const createdOrder = await OrdersAPI.create(orderPayload);

            const deliveryPayload = getDeliveryPayload(formData);
            console.log("Delivery payload:", deliveryPayload);
            await DeliveryAPI.create(createdOrder.order.id, deliveryPayload);

            await CartAPI.clear();

            showMessage("Order placed successfully!", () => navigate("/menu"));

        } catch {
            showMessage("Order failed!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { onSubmitOrder, isSubmitting };
};
