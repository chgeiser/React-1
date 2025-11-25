import './App.css'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import Producto from './components/Producto'

function App() {

  return (
    <>
      <Banner/>
      <Sidebar/>
      <div style={{dispplay:'flex'}}>
      <Producto nombre="Pizza 1" texto ="Pizza Napolitana"> </Producto>
      <Producto nombre="Pizza 2" texto ="Pizza Europea"> </Producto>
      <Producto nombre="Pizza 3" texto ="Pizza Americana"> </Producto>
      </div>
    </>
  )
}

export default App
