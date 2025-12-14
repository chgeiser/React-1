import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Cart.css";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { useState } from "react";
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

const CartPage = () => {
  const [cart, setCart] = useState(
    pizzaCart.map(p => ({ ...p, cantidad: 1 }))
  );

  const incrementar = (id) => {
    setCart(cart =>
      cart.map(p =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  };

  const decrementar = (id) => {
    setCart(cart =>
      cart.map(p =>
        p.id === id
          ? { ...p, cantidad: Math.max(1, p.cantidad - 1) }
          : p
      )
    );
  };

  const totalGeneral = cart.reduce(
    (acc, p) => acc + p.price * p.cantidad,
    0
  );

  return (
    <div className="pedido">
      <h3>Detalles del pedido:</h3>

      {cart.map(pizza => (
        <Cart
          key={pizza.id}
          pizza={pizza}
          onAdd={incrementar}
          onRemove={decrementar}
        />
      ))}

      <div className="total">
        <strong>Total:</strong>
        <strong>
          ${totalGeneral.toLocaleString("es-CL")}
        </strong>
      </div>

      <button className="pagar">Pagar</button>
    </div>
  );
};

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
