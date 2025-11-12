import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppTable } from "../components/AppTable/AppTable.jsx";
import { AppButton } from "../components/AppButton/AppButton.jsx";

import "../styles/pages.css";

export const Cart = () => {
    const navigate = useNavigate();

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

    const handleAdd = (row) => {
        setRows(rows.map(r => r.id === row.id ? { ...r, quantity: r.quantity + 1 } : r));
    };

    const handleRemove = (row) => {
        setRows(rows.map(r => r.id === row.id ? { ...r, quantity: Math.max(r.quantity - 1, 1) } : r));
    };

    const handleDelete = (row) => {
        setRows(rows.filter(r => r.id !== row.id));
    };

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="page">
            <label className="page__label">Cart</label>

            <AppTable
                columns={columns}
                rows={rows}
                onIncreaseQuantity={handleAdd}
                onDecreaseQuantity={handleRemove}
                onDeleteCartItem={handleDelete}
                showTotal={true}
            />

            <div className="page__button">
                <AppButton label="Checkout" onClick={handleCheckout}/>
            </div>
        </div>
    );
};
