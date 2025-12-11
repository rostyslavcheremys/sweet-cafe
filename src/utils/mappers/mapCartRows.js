import { getUnit } from "../";

export const mapCartRows = (cartItems) => {
    return cartItems.map(item => ({
        id: item.id,
        name: item.menu_item.name,
        size: `${item.menu_item.size} ${getUnit(item.menu_item)}`,
        price: item.menu_item.price,
        discount: item.menu_item.discount,
        quantity: item.total_quantity,
        total: item.total_quantity * item.menu_item
    }));
}