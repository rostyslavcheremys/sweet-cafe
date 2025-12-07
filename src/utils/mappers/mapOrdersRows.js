import {
    formatPrice,
    formatDate,
    formatTime
} from "../";

export const mapOrdersRows = (orders = []) => {
    return orders.map(order => ({
        id: order.id,
        total_amount: formatPrice(order.total_amount),
        items_quantity: order.items_quantity,
        time: formatTime(order.created_at),
        date: formatDate(order.created_at),
        status: order.status
    }));
};