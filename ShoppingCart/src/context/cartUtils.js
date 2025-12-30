export const calcCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0
        const itemQuantity = parseInt(item.quantity) || 0
        return total + (itemPrice * itemQuantity)

    }, 0)
}