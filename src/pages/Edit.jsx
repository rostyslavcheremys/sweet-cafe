import { useState } from "react";

import { AppTable } from "../components/AppTable/AppTable.jsx";
import { FormSelect } from "../components/Forms/FormSelect.jsx";

import "../styles/pages.css";

export const Edit = () => {
    const [category, setCategory] = useState("");
    const [editItem, setEditItem] = useState(null);
    const [newItem, setNewItem] = useState(null);

    const [rows, setRows] = useState([
        { id: 1, name: "Coca-Cola", size: "500 ml", price: 0.50 },
        { id: 2, name: "Mineral Water", size: "500 ml", price: 0.50 },
        { id: 3, name: "Pepsi", size: "500 ml", price: 0.55 },
        { id: 4, name: "Coca-Cola", size: "500 ml", price: 0.50 },
        { id: 5, name: "Mineral Water", size: "500 ml", price: 0.50 },
        { id: 6, name: "Pepsi", size: "500 ml", price: 0.55 },
        { id: 7, name: "Coca-Cola", size: "500 ml", price: 0.50 },
        { id: 8, name: "Mineral Water", size: "500 ml", price: 0.50 },
        { id: 9, name: "Pepsi", size: "500 ml", price: 0.55 },
    ]);

    const columns = [
        { field: "name", headerName: "Name", align: "left" },
        { field: "size", headerName: "Size" },
        { field: "price", headerName: "Price" },
        { field: "image", headerName: "Image" },
    ];

    const handleEdit = (updatedRow) => {
        setRows(rows.map(r => r.id === updatedRow.id ? updatedRow : r));
        setEditItem(updatedRow.id);
    }

    const handleSave = (updatedData) => {
        setRows(rows.map(r => r.id === editItem.id ? { ...r, ...updatedData } : r));
        setEditItem(null);
    }

    const handleDelete = (row) => {
        setRows(rows.filter(r => r.id !== row.id));
    }

    const handleStartAdd = () => {
        const emptyItem = columns.reduce((acc, col) => ({ ...acc, [col.field]: "" }), {});
        setNewItem(emptyItem);
    }

    const handleCancelAdd = () => setNewItem(null);

    const handleSaveAdd = () => {
        if (!newItem.name || !newItem.size || !newItem.price) return;
        const itemToAdd = { ...newItem, id: Date.now(), price: Number(newItem.price) };
        setRows([...rows, itemToAdd]);
        setNewItem(null);
    }

    return (
        <div className="page ">
            <label className="page__label">Edit</label>

            <div className="page__forms edit">
                <FormSelect
                    label="Category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    options={[
                        {value: "combo", label: "Combo Offers"},
                        {value: "hot-drinks", label: "Hot Drinks"},
                        {value: "cold-drinks", label: "Cold Drinks"},
                        {value: "donuts", label: "Donuts"},
                        {value: "cakes", label: "Cakes"},
                        {value: "cupcakes", label: "Cupcakes"},
                        {value: "croissants", label: "Croissants"},
                    ]}
                />
            </div>

            <AppTable
                columns={columns}
                rows={rows}
                editItem={editItem}
                newItem={newItem}
                setNewItem={setNewItem}
                onEditItem={handleEdit}
                onSaveItem={handleSave}
                onDeleteItem={handleDelete}
                onStartAddItem={handleStartAdd}
                onCancelAddItem={handleCancelAdd}
                onSaveAddItem={handleSaveAdd}
                allowAddItem={true}
            />
        </div>
    );
};