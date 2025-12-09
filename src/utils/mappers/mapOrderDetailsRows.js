import { getUnit } from "../";

export const mapOrderDetailsRows = (items = []) => {
    return items.map(item => ({
        id: item?.id,
        name: item?.menu_item?.name ?? "Unknown item",
        size: item?.menu_item
            ? `${item.menu_item.size} ${getUnit(item.menu_item.size)}`
            : "—",
        price: item?.price ?? 0,
        quantity: item?.quantity ?? 0,
        subtotal: item?.subtotal ?? 0,
    }));
};