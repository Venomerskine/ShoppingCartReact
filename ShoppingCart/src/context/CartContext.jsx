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

    const totalPrice = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0
        const itemQuantity = parseInt(item.quantity) || 0
        return total + (itemPrice * itemQuantity)

    }, 0)

    const itemCount =  cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity}, 0)

    return (
        <CartContext.Provider value={{cartItems, addToCart, totalPrice, itemCount}}>
            {children}
        </CartContext.Provider>
    )

}

export const calcCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0
        const itemQuantity = parseInt(item.quantity) || 0
        return total + (itemPrice * itemQuantity)

    }, 0)
}