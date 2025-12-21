import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Cart.css";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { pizzaCart} from "../src/components/data/pizzas.js"
import Cart from "./components/Cart.jsx";
import axios from 'axios'

function HomePage() {

  const [listaPizzas, setListaPizzas] = useState([])

    const axiosData  = async(url) =>{
    const response = await axios.get(url);
    setListaPizzas(response.data);
    console.log("response: " + response.data);
  }

useEffect(() => {
  const load = async () => {
    await axiosData("http://localhost:5000/api/pizzas");
  };

  load();
}, []);
  return (
    <>
      <div style={{ display: "flex" }}>
       {listaPizzas.map((pizza) => (
          <Producto
            key={pizza.id}
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
    <>
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
    </>
  );
};

const Pizza = () =>{

    const [vistaPizzas, setVistaPizzas] = useState([])

    const axiosData  = async(url) =>{
    const response = await axios.get(url);
    setVistaPizzas([response.data]);
    console.log("response: " + response.data);
  }

useEffect(() => {
  const load = async () => {
    await axiosData("http://localhost:5000/api/pizzas/p001");
  };

  load();
}, []);

if (!vistaPizzas) return <h3>Cargando...</h3>;

  return(
  <>
      <div>
        
        <h3>Pizza:</h3>
          {vistaPizzas.map(pizza => (
            <Producto
              key={pizza.id}
              title={pizza.name}
              text={pizza.desc}
              precio={pizza.price}
              imagen={pizza.img}
            />
          ))}
      </div>
  </>
  );
};

function App() {
  const menus = [
    { nombre: "Home", link: "/" },
    { nombre: "Login", link: "/login" },
    { nombre: "Register", link: "/register" },
    { nombre: "Cart", link: "/cart"},
    { nombre: "Pizzas", link: "/pizzas"},
  ];

  return (
    <BrowserRouter>
     <Banner />
      <Sidebar menu={menus} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/pizzas" element={<Pizza/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
