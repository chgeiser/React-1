import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";

import {pizzas, pizzaCart} from "../src/components/data/pizzas.js"
import Cart from "./components/Cart.jsx";

function HomePage() {
  return (
    <>
      <Banner />
      <div style={{ display: "flex" }}>
       {pizzas.map((pizza, posicion) => (
          <Producto
            key={posicion}
            title={pizza.name}
            text={pizza.desc}
            precio={pizza.price}
            imagen={pizza.img}
          />
        ))}
        
      </div>
    </>
  );
}

function CartPage(){

  return(
    <div>
       {pizzaCart.map((pizzacart) => (
          <Cart
            key={pizzacart.id}
            imagen={pizzacart.imagen}
            nombre={pizzacart.name}
            precio={pizzacart.precio}
          />
        ))}
        
      </div>
  );
}

function App() {
  const menus = [
    { nombre: "Home", link: "/" },
    { nombre: "Login", link: "/login" },
    { nombre: "Register", link: "/register" },
    { nombre: "Cart", link: "/cart"},
  ];

  return (
    <BrowserRouter>
      <Sidebar menu={menus} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
