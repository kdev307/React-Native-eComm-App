import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item) => {
        // if (!item || !item.sys || !item.sys.id) {
        //     console.error("Invalid product data", item);
        //     return;
        // }

        setCart((prevCart) => {
            console.log("Previous Cart:", prevCart);
            const itemExists = prevCart.some((cartItem) => cartItem.id === item.id);
            console.log("Item Exists:", itemExists);
            if (!itemExists) {
                const updatedCart = [...prevCart, item];
                console.log("Updated Cart:", updatedCart);
                calculateTotalPrice(updatedCart);
                return updatedCart;
            }
            return prevCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((cartItem) => cartItem.id !== itemId);
            console.log("Updated Cart after Removal:", updatedCart);
            calculateTotalPrice(updatedCart);
            return updatedCart;
        });
    };

    const calculateTotalPrice = (cartItems) => {
        let totalSum = cartItems.reduce((total, item) => total + item.price, 0);
        totalSum = totalSum.toFixed(2);
        setTotalPrice(totalSum);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
