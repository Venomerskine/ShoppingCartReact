import { useEffect, useState } from "react";

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
        <h2>Welcome to the Shop</h2>
        <h3>{shopData[4].title}</h3>
        </div>
    )
}