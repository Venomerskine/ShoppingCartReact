import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext)
};

export const CartProvider = ({children}) => {

    const [shopData, setShopData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>
        
         {
        fetch('https://fakestoreapi.com/products/')
        .then((data) => {
            if (data.status >= 400){
                throw new Error("Server Error")
            }
            return data.json()
        })
        .then(data => setShopData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))

    }, [])


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


    const increase = (itemId) =>{
        setCartItems(
            cartItems.map((cartProduct) => 
                cartProduct.id === itemId 
            ? {...cartProduct, quantity: cartProduct.quantity +1}
            : cartProduct
            )
        )
    }

    const decrease = (itemId) => {
        setCartItems(cartItem =>
            cartItem.map(item => 
                itemId === item.id
                ? {...item, quantity: item.quantity -1}
                :item
            ) .filter(item => item.quantity > 0)
        )
    }

    const remove = (itemId) => {
        setCartItems(
            cartItems.filter(item => item.id !== itemId))
    }

    return (
        <CartContext.Provider value={{
            cartItems,addToCart, totalPrice, itemCount, increase, decrease, remove, shopData, error, loading
            }}>
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