import Cart from "./pages/cart";
import Shop from "./pages/shop";
import HomePage from "./pages/homePage";
import { BrowserRouter as  Router, Link, Routes, Route } from "react-router-dom";
import './index.css'

export default function App(){

  return(
    <Router>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="Shop">Shop</Link>
        <Link to="Cart">Cart</Link>
      </nav>
      <main>

      <Routes>
        <Route path="/" element ={<HomePage/>} ></Route>
        <Route path="Shop" element ={<Shop/>} ></Route>
        <Route path="Cart" element ={<Cart/>} ></Route>
      </Routes>
      </main>

    </Router>
  )
}
