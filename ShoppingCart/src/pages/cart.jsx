import { useCart } from "../context/CartContext"



export default function Cart(){


    const {cartItems} = useCart()
    
    return(
        <div>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                {cartItems.map(item => (
                    <div className="card">
                        <img src={item.image} alt={item.title}></img>
                        <h3>{item.title}</h3>
                        <p>$ {item.price}</p>
                        <p>Count: {item.quantity}</p>
                        <p>Total: $ {(item.price)*(item.quantity)}</p>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}