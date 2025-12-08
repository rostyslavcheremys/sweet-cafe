import { useState } from "react";

import { ItemDetails } from "../";

import { formatPrice } from "../../utils";

export const ItemCards = ({ items = [] }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <div className="item-cards">
                {items.map((item) => {
                    const isAvailable = item.available !== false;

                    return (
                        <div
                            className={`item-card ${isAvailable ? "" : "disabled"}`}
                            key={item.id}
                            onClick={() => isAvailable && setSelectedItem(item)}
                        >
                            <div className="card">
                                <img
                                    className="card__image"
                                    src={item.image_url || "images/placeholder.webp"}
                                    alt={item.name}
                                    onError={(e) => {
                                        e.currentTarget.src = "images/placeholder.webp";
                                    }}
                                />
                                <div className="card__content">
                                    <label className="card__label">{item.name}</label>
                                    <label className="card__label">{formatPrice(item.price)}</label>
                                </div>
                                {!isAvailable && <span className="out-of-stock">Out of stock</span>}
                            </div>
                        </div>
                    );
                })}
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
