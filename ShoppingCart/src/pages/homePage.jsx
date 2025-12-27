import { useCart } from "../context/CartContext"
import '../index.css'


export default function HomePage(){

    const {shopData , loading} = useCart()

    if (loading) return <p>Loading categories...</p>;

    return(
        <div>
            <h2>Welcome to the Home Page</h2>

            <h3>Men's clothing</h3>
            <div className="category-row">
                {shopData
                    .filter(product => product.category === "men's clothing")
                    .map(product => (
                        <img key={product.id} src={product.image} alt={product.title}  />
                    ))
                }
            </div>

           <h3>Womens Clothing</h3>
            <div className="category-row">
                {shopData
                    .filter(product => product.category === "women's clothing")
                    .map(product => (
                        <img key={product.id} src={product.image} alt={product.title}  />
                    ))
                }
            </div> 

            <h3>Jewelry</h3>
            <div className="category-row">
                {shopData
                    .filter(product => product.category === "jewelery")
                    .map(product => (
                        <img key={product.id} src={product.image} alt={product.title}  />
                    ))
                }
            </div>       


        
        </div>

        
    )
}