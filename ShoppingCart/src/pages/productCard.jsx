import React, { useState } from "react";
import '../index.css'
import { useCart } from "../context/CartContext";

const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const {addToCart} = useCart()

    const handleQuantity = (num) => {
        const val = Number(num.target.value)
        setQuantity(Number.isNaN(val) ? 1 : Math.max(1, val))
    }

    return (

        <div className="card" key={product.id}>
            <img src={product.image} alt={product.id}></img>
            <h3>{product.title}</h3>
            <p>$ {(product.price).toFixed(2)}</p>
            <p>{product.category}</p>
            <form>
            <input type="number" placeholder="How many" min={1} id={product.title} onChange={handleQuantity}></input>
            </form>
            <button onClick = {() => addToCart(product, quantity)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard