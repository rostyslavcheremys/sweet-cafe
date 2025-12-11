import { getDiscountPrice } from "../../utils";

export const getTotalPrice = (rows = []) => {
    return rows.reduce((sum, row) => {
        const priceWithDiscount = getDiscountPrice(row.price, row.discount);
        return sum + priceWithDiscount * row.quantity;
    }, 0);
};
