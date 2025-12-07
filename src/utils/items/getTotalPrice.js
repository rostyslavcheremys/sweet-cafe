export const getTotalPrice = (rows = []) => {
    return rows.reduce((sum, r) => sum + (Number(r.price) || 0) * (Number(r.quantity) || 0), 0);
};
