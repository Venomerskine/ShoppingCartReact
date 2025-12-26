import React from "react";
import '../index.css'

const ProductCard = ({product}) => {
    return (

        <div className="card" key={product.id}>
            <img src={product.image} alt={product.title}></img>
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
            <p>{product.category}</p>
        </div>
    )
}

export default ProductCard