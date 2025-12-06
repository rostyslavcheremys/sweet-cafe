export const getOrderPayload = (cartItems, formData) => ({
    order: {
        notes: formData.notes || ""
    },
    order_items: cartItems.map(item => ({
        menu_item_id: item.menu_item.id,
        total_quantity: item.total_quantity
    }))
});