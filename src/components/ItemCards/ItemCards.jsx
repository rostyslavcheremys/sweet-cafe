import { useState } from "react";

import { ItemDetails } from "../ItemDetails/ItemDetails.jsx";

import { items } from "../../items.js";

import "./ItemCards.css";

export const ItemCards = () => {
    const [selectedItem, setSelectedItem] = useState(null); // обраний продукт
    const [open, setOpen] = useState(false);

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <div className="item-cards">
                {items.map((item, index) => (
                    <div
                        className="item-card"
                        key={index}
                        onClick={() => handleOpen(item)}
                    >
                        <div className="card">
                            <img className="card-image" src={item.image} alt={item.title} />
                            <div className="card-content">
                                <label className="card-label">{item.title}</label>
                                <label className="card-label">{`$${item.price}`}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <ItemDetails
                    open={open}
                    onClose={handleClose}
                    item={selectedItem}
                />
            )}
        </>
    );
};