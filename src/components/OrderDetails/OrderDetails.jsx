import { useState } from "react";

import { AppTable } from "../AppTable/AppTable.jsx";

import "./OrderDetails.css";

export const OrderDetails = () => {

    const [rows, setRows] = useState([
        { id: 1, name: "Coca-Cola", size: "500 ml", price: 0.50, quantity: 1 },
        { id: 2, name: "Mineral Water", size: "500 ml", price: 0.50, quantity: 2 },
        { id: 3, name: "Pepsi", size: "500 ml", price: 0.55, quantity: 1 },
    ]);

    const columns = [
        { field: "name", headerName: "Name", align: "left" },
        { field: "size", headerName: "Size" },
        { field: "price", headerName: "Price" },
        { field: "quantity", headerName: "Quantity" },
        { field: "total", headerName: "Total" },
    ];

    return (
        <div className="order-details">
            <div className="order-details__container">
                <label className="order-details__label">Order: id</label>

                <AppTable
                    columns={columns}
                    rows={rows}
                    showTotal={true}
                    showActions={false}
                />
            </div>
        </div>
    );
};
