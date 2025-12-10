import { useState } from "react";

import { ItemDetails } from "../";

import { formatPrice, getDiscountPrice } from "../../utils";

export const ItemCards = ({ items = [] }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <div className="item-cards">
                {items.map((item) => {
                    const isAvailable = item.available !== false;
                    const hasDiscount = item.discount > 0 && item.discount <= 100;
                    const finalPrice = getDiscountPrice(item.price, item.discount);

                    return (
                        <div
                            className={`item-card ${isAvailable ? "" : "disabled"}`}
                            key={item.id}
                            onClick={() => isAvailable && setSelectedItem(item)}
                        >
                            <div className="card">
                                {hasDiscount && <span className="discount">{item.discount}%</span>}
                                <img
                                    className="card__image"
                                    src={item.image_url || "images/placeholder.webp"}
                                    alt={item.name}
                                    onError={(e) => {
                                        e.currentTarget.src = "images/placeholder.webp";
                                    }}
                                />
                                <div className="card__content">
                                    <span className="card__label">{item.name}</span>
                                    <span className="card__label">
                                        {hasDiscount ? formatPrice(finalPrice) : formatPrice(item.price)}
                                    </span>
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
