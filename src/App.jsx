import "./App.css";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import  pizza1  from "../src/assets/img/pizza1.jpg";
import  pizza2  from "../src/assets/img/pizza2.jpg";
import  pizza3  from "../src/assets/img/pizza3.jpg";

function App() {
  const menus = [
    { nombre: "Home", link: "/" },
    { nombre: "Login", link: "/login" },
    { nombre: "Register", link: "/register" },
  ];

  return (
    <>
      <Sidebar menu={menus} />
      <Banner></Banner>
      <div style={{ display: "flex" }}>
        <Producto
          title="Pizza Napolitana"
          text="mozzarella, tomates, jamón, orégano"
          precio="5.950"
          imagen={pizza1}
        />

        <Producto
          title="Pizza Española"
          text="mozzarella, gorgonzola, parmesano, provolone"
          precio="6.950"
          imagen={pizza2}
        />

        <Producto
          title="Pizza Pepperoni"
          text="mozzarella, pepperoni, orégano"
          precio="6.950"
          imagen={pizza3}
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
