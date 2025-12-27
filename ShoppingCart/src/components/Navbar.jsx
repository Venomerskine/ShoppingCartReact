import { useCart } from "../context/CartContext";
import {BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";



export const Navbar = () => {
const {itemCount, totalPrice} = useCart()

    return (
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="Shop">Shop</Link>
        <Link to="Cart">Cart: {}( total: {itemCount} price: $ {totalPrice})</Link>
      </nav>

    )
}