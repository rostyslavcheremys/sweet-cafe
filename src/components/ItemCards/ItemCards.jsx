import { useState } from "react";

import { ItemDetails } from "../ItemDetails/ItemDetails.jsx";

import { formatPrice } from "../../utils/formatters/formatPrice.js";

import imagePlaceholder from "../../assets/placeholder.webp";

import "./ItemCards.css";

export const ItemCards = ({ items = [] }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <div className="item-cards">
                {items.map((item) => (
                    <div
                        className="item-card"
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className="card">
                            <img
                                className="card__image"
                                src={item.image_url || imagePlaceholder}
                                alt={item.name}
                            />
                            <div className="card__content">
                                <label className="card__label">{item.name}</label>
                                <label className="card__label">{formatPrice(item.price)}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <ItemDetails
                    open={true}
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </>
    );
};