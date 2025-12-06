export const getDeliveryPayload = (formData) => {
    const payload = {
        delivery_method: formData.delivery,
        payment_method: formData.payment,
        phone: formData.phone,
        delivery_notes: formData.notes || ""
    };

    if (formData.delivery === "by courier") {
        payload.address = formData.address;
        payload.city = formData.city;
    } else if (formData.delivery === "pickup") {
        payload.pickup_time = formData.time;
    }

    return payload;
};