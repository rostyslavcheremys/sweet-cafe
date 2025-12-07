import { getUnit } from "../items/getUnit.js";

export const mapOrdersDetailsRows = (items = []) => {
    return items.map(item => ({
        id: item.id,
        name: item.menu_item.name,
        size: `${item.menu_item.size} ${getUnit(item.menu_item.size)}`,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.subtotal,
    }));
};