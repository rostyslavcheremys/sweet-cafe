export const getDiscountPrice = (price, discount = 0) => {
    if (discount > 0 && discount <= 100) {
        return price - (price * discount) / 100;
    }

    return price;
};