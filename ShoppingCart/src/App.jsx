import Cart from "./pages/cart";
import Shop from "./pages/shop";
import HomePage from "./pages/homePage";
import { BrowserRouter as  Router, Link, Routes, Route } from "react-router-dom";
import './index.css'
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";


export default function App(){


  return(

<CartProvider>
  <Router>
    <Navbar /> 
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </main>
  </Router>
</CartProvider>
  )
}
