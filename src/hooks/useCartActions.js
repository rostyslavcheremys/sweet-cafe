import { useState, useRef, useEffect } from "react";

import { CartAPI } from "../api/index.js";

export const useCartActions = (data, showMessage) => {
    const [cartItems, setCartItems] = useState([]);
    const debounceRef = useRef({});

    useEffect(() => {
        if (data?.cart_items) setCartItems(data.cart_items);
    }, [data]);

    const updateQuantity = (id, newQty) => {
        setCartItems(prev => prev.map(
            item => item.id === id ? { ...item, total_quantity: newQty } : item
        ));

        if (debounceRef.current[id]) clearTimeout(debounceRef.current[id]);

        debounceRef.current[id] = setTimeout(async () => {
            try {
                await CartAPI.updateItem(id, newQty);
            } catch {
                showMessage("Failed to update quantity!");
            }
        }, 500);
    };

    const increase = (id) => {
        const item = cartItems.find(i => i.id === id);
        if (!item) return;
        const newQty = Math.min(item.total_quantity + 1, item.menu_item.quantity_available);
        updateQuantity(id, newQty);
    };

    const decrease = (id) => {
        const item = cartItems.find(i => i.id === id);
        if (!item || item.total_quantity <= 1) return;
        updateQuantity(id, item.total_quantity - 1);
    };

    const remove = async (itemId) => {
        try {
            await CartAPI.removeItem(itemId);
            setCartItems(prev => prev.filter(i => i.id !== itemId));
        } catch {
            showMessage("Failed to delete item!");
        }
    };

    const clear = async () => {
        try {
            await CartAPI.clear();
            setCartItems([]);
        } catch {
            showMessage("Failed to clear cart!");
        }
    };

    return { cartItems, increase, decrease, remove, clear };
}