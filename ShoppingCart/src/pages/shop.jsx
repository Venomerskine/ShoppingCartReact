import ProductCard from "./productCard";
import { useCart } from "../context/CartContext";

export default function Shop(){

    const {shopData, loading, error} = useCart()


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