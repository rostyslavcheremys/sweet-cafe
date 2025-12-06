import { formatPrice } from "../formatters/formatPrice.js";
import { formatDate } from "../formatters/formatDate.js";
import { formatTime } from "../formatters/formatTime.js";

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