import { useState } from "react";
import { useParams } from "react-router-dom";

import { AppTable } from "../components/AppTable/AppTable.jsx";

import { ORDERS_DETAILS_COLUMNS } from "../constants/tableColumns/ordersDetailsColumns.js";

export const OrderDetails = () => {
    const { id } = useParams();

    const [rows,] = useState([
        { id: 1, name: "Coca-Cola", size: "500 ml", price: 0.50, quantity: 1 },
        { id: 2, name: "Mineral Water", size: "500 ml", price: 0.50, quantity: 2 },
        { id: 3, name: "Pepsi", size: "500 ml", price: 0.55, quantity: 1 },
    ]);

    return (
        <div className="page">
            <span className="page__label">{`Order: ${id}`}</span>

            <AppTable
                columns={ORDERS_DETAILS_COLUMNS}
                rows={rows}
                showTotal={true}
                showActions={false}
            />
        </div>
    );
};
