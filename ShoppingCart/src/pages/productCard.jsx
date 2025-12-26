import React, { useState } from "react";
import '../index.css'
import { useCart } from "../context/CartContext";

const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const {addToCart} = useCart()

    const handleQuantity = (num) => {

        const val = Number(num.target.value)
        setQuantity(val < 1 ? 1 : val)
    }

    return (

        <div className="card" key={product.id}>
            <img src={product.image} alt={product.title}></img>
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
            <form>
            <input type="number" placeholder="How many" min={0} id={product.title} onChange={handleQuantity}></input>
            </form>
            <button onClick = {() => addToCart(product, quantity)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard