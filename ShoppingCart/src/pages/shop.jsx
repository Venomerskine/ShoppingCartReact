import { useEffect, useState } from "react";
import ProductCard from "./productCard";

export default function Shop(){

    const [shopData, setShopData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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

    console.log(shopData)
    if (loading) return <p>Loadong ... </p>
    if(error) return <p>Network Error encountered</p>

    return (
        <div>
        <h1>Welcome to the Shop</h1>
        <div className="product-grid">
        {shopData.map((product) => (
            <ProductCard key={product.id} product = {product}/>
        ))}
        </div>

        </div>
    )
}