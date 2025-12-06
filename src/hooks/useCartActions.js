import { useState, useRef, useEffect } from "react";
import { updateCartItem, deleteCartItem, clearCart } from "../../api";

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
                await updateCartItem(id, newQty);
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
            await deleteCartItem(itemId);
            setCartItems(prev => prev.filter(i => i.id !== itemId));
        } catch {
            showMessage("Failed to delete item!");
        }
    };

    const clear = async () => {
        try {
            await clearCart();
            setCartItems([]);
        } catch {
            showMessage("Failed to clear cart!");
        }
    };

    return { cartItems, increase, decrease, remove, clear };
}