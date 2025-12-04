export const getUnit = (item) => {
    return item?.category?.name?.toLowerCase() === "drinks" ? "ml" : "g";
};