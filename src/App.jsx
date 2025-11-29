import './App.css'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import Producto from './components/Producto'
import Footer from './components/Footer';

function App() {

  const menus = [
  { nombre: "Home", link: "/" },
  { nombre: "Login", link: "/login" },
  { nombre: "Register", link: "/register" }
];

  return (
    <>

      <Banner></Banner>
      <Sidebar menu={menus} />
      <div style={{display:'flex'}}>
        <Producto title="Pizza Napolitana" text ="mozzarella, tomates, jamón, orégano" precio="$5.950"> </Producto>
        <Producto title="Pizza Española" text ="mozzarella, gorgonzola, parmesano, provolone" precio="$6.950"> </Producto>
        <Producto title="Pizza Pepperoni" text ="mozzarella, pepperoni, orégano" precio="$6.950"> </Producto>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
