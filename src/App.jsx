import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/Cart.css";
import Sidebar from "./components/Sidebar.jsx";
import Banner from "./components/Banner.jsx";
import Producto from "./components/Producto.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./page/LoginPage.jsx";
import Register from "./page/Register.jsx";
import NotFound from "./page/NotFound.jsx";
import { useEffect, useState } from "react";
import { pizzaCart} from "../src/components/data/pizzas.js"
import Cart from "./page/Cart.jsx";
import axios from 'axios'
import Pizzas from "./page/Pizzas.jsx";
import Profile from "./page/Profile.jsx";

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
            <Pizzas
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



function App() {
  const menus = [
    { nombre: "Home", link: "/" },
    { nombre: "Login", link: "/login" },
    { nombre: "Register", link: "/register" },
    { nombre: "Profile", link: "/profile"},
  ];

  return (
    <BrowserRouter>
     <Banner />
      <Sidebar menu={menus} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Pizza/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/pizzas" element={<CartPage/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
