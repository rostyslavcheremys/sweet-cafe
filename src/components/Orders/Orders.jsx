import { useState } from "react";

import { AppTable } from "../AppTable/AppTable.jsx";

import "./Orders.css";
import {useNavigate} from "react-router-dom";

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
    const handleViewOrder = () => {
        navigate("/");
    };

    return (
        <div className="orders">
            <div className="orders__container">
                <label className="orders__label">Orders</label>

                <AppTable
                    columns={columns}
                    rows={rows}
                    showActions={true}
                    onView={handleViewOrder}
                />
            </div>
        </div>
    );
};