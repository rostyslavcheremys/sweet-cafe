import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppTable } from "../components/AppTable/AppTable.jsx";

import "../styles/pages.css";

export const Orders = () => {
    const navigate = useNavigate();

    const [rows, setRows] = useState([
        { id: 1, price: 1.50, items: 3, time: "14:34", date: "27.04.25", status: "Processing" },
        { id: 2, price: 1, items: 2, time: "09:59", date: "25.04.25", status: "Completed" },
        { id: 3, price: 5, items: 5, time: "16:27", date: "22.04.25", status: "Completed" },
    ]);

    const columns = [
        { field: "id", headerName: "Number" },
        { field: "price", headerName: "Price" },
        { field: "items", headerName: "Items" },
        { field: "time", headerName: "Time" },
        { field: "date", headerName: "Date" },
        { field: "status", headerName: "Status" },
    ];

    const handleOrderDetails = () => {
        navigate("/order/id");
    };

    return (
        <div className="page">
            <label className="page__label">Orders</label>

            <AppTable
                columns={columns}
                rows={rows}
                showActions={true}
                onViewOrder={handleOrderDetails}
            />
        </div>
    );
};