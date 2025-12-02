import { useState } from "react";

import { ItemDetails } from "../ItemDetails/ItemDetails.jsx";

import placeholder from "../../assets/placeholder.webp";

import "./ItemCards.css";

export const ItemCards = ({ items, selectedCategory }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    const filteredItems = selectedCategory
        ? items.filter(item => item.category?.id === selectedCategory)
        : items;

    return (
        <>
            <div className="item-cards">
                {filteredItems.map((item) => (
                    <div
                        className="item-card"
                        key={item.id}
                        onClick={() => handleOpen(item)}
                    >
                        <div className="card">
                            <img className="card__image" src={item.image_ur || placeholder} alt={item.name} />
                            <div className="card__content">
                                <label className="card__label">{item.name}</label>
                                <label className="card__label">{`$${item.price.toFixed(2)}`}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <ItemDetails
                    open={open}
                    item={selectedItem}
                    onClose={handleClose}
                />
            )}
        </>
    );
};