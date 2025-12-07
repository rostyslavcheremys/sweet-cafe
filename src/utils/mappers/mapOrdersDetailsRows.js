
import { formatPrice } from "../formatters/formatPrice.js";
import { formatDate } from "../formatters/formatDate.js";
import { formatTime } from "../formatters/formatTime.js";

export const mapOrdersDetailsRows = (items = []) => {
    return items.map(item => ({
        name: item.menu_item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.subtotal,
    }));
};