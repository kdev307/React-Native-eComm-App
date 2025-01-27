import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = (cartItems) => {
        let totalSum = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
        totalSum = totalSum.toFixed(2);
        setTotalPrice(totalSum);
    };

    const addToCart = (item) => {
        // if (!item || !item.sys || !item.sys.id) {
        //     console.error("Invalid product data", item);
        //     return;
        // }

        setCart((prevCart) => {
            console.log("Previous Cart:", prevCart);
            const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
            console.log("Item Exists:", itemIndex);
            if (itemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].qty += 1;
                calculateTotalPrice(updatedCart);
                console.log("Updated Cart:", updatedCart);
                return updatedCart;
            } else {
                const updatedCart = [...prevCart, { ...item, qty: 1 }];
                calculateTotalPrice(updatedCart);
                return updatedCart;
            }
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

    const decQty = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map((item) => {
                    if (item.id === productId && item.qty > 1) {
                        return { ...item, qty: item.qty - 1 };
                    }
                    if (item.id === productId && item.qty === 1) return removeFromCart(productId);
                    return item;
                })
                .filter((item) => item.qty > 0);
            calculateTotalPrice(updatedCart);
            return updatedCart;
        });
    };

    const incQty = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, qty: item.qty + 1 };
                }
                return item;
            });
            calculateTotalPrice(updatedCart);
            return updatedCart;
        });
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
        incQty,
        decQty,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
