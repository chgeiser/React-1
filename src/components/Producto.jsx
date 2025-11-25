import '../components/Producto.css';

const Producto = (props) => {
  return (
    <>
    <div className="cardProducto">
        <h3>{props.nombre}</h3>
        <hr/>
        <p>{props.texto}</p>
        <button>Enviar</button>

    </div>
    </>
  )
}

export default Producto