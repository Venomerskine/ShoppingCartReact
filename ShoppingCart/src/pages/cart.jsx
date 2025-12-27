import { useCart } from "../context/CartContext"
import { calcCartTotal } from "../context/CartContext"



export default function Cart(){

    
    const {cartItems, increase, decrease, remove} = useCart()
    

    
    return(
        <div>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                <div className="price">
                <h2>Total: $ {calcCartTotal(cartItems)}</h2>
                </div>
                <div className="cart">
                {cartItems.map(item => (
                    <div className="cart-card" key={item.id}>
                        <img src={item.image} alt={item.title}></img>
                        <h3>{item.title}</h3>
                        <p>$ {(item.price).toFixed(2)}</p>
                        <p>Count: {item.quantity}</p>
                        <p>Total: $ {((item.price)*(item.quantity)).toFixed(2)}</p>
                        <button onClick={() => increase(item.id)}>increase</button>
                        <button onClick={() => decrease(item.id)}>decrease</button>
                        <button onClick={() => remove(item.id)}>delete</button>
                    </div>
                ))}
                
                </div>
                
                </>
            )}
        </div>
    )
}