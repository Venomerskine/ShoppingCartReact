import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, amount) => {

        const existingProduct = cartItems.find((cartItem) => cartItem.id === product.id)

        if(existingProduct) {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === product.id 
                    ? {...cartItem, quantity: cartItem.quantity + amount}
                    : cartItem
                )
            )
        } else {
            setCartItems([...cartItems, {...product, quantity: amount}]);
        }

    };

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )

}