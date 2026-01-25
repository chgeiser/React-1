import "../assets/css/Cart.css";

const Cart = ({ pizza, onAdd, onRemove }) => {
  const { id, img, name, price, cantidad } = pizza;

  return (
    <div className="item">
      <img src={img} alt={name} />
      <span className="nombre">{name}</span>
      <span className="precio">
        ${price.toLocaleString("es-CL")}
      </span>

      <div className="cantidad">
        <button
          className="menos"
          onClick={() => onRemove(id)}
        >
          -
        </button>

        <span>{cantidad}</span>

        <button
          className="mas"
          onClick={() => onAdd(id)}
        >
          +
        </button>
      </div>

      
    </div>
  );
};
export default Cart;
