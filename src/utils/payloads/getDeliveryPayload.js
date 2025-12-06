import { formatPickupTime } from "../formatters/formatPickupTime.js";

export const getDeliveryPayload = (formData) => {
    return {
        delivery_method: formData.delivery,
        payment_method: formData.payment,
        phone: formData.phone,
        delivery_notes: formData.notes || "",
        address: formData.address,
        city: formData.city,
        pickup_time: formatPickupTime(formData.time),
    };
};