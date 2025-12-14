import React from "react";
import { useState } from "react";
import "./Cart.css";

const Cart = (imagen, nombre, precio) => {
  const [contador, setContador] = useState(0);
  const [total, setTotal] = useState(0)


  const handleChange = (e) => {
    setTotal(e.target.value)
  };

  return (
    <>
    <div className="pedido">
      <h3>Detalles del pedido:</h3>
    </div>
    
    <div>
      <div className="item">
        <img src={imagen} alt={nombre} />
        <span className="nombre">{nombre}</span>
        <span className="precio">{precio}</span>

        <div className="cantidad">
          <button
            className="menos"
            onClick={() => setContador((contador) => contador - 1)}
          >-</button>
          <span>{contador}</span>
          <button
            className="mas"
            onClick={() => setContador((contador) => contador + 1)}
          >+</button>
          
        </div>
      </div>

      <div className="total">
        <strong>Total:</strong>
        <strong onChange={handleChange}>{total}</strong>
      </div>

      <button className="pagar">Pagar</button>
    </div>
    </>
  );
};
export default Cart;
