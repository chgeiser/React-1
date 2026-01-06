import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../assets/css/Producto.css";

const Pizzas = ({ title, text, precio, imagen }) => {
  return (
    <Card style={{ width: "18rem" }} className="shadow">
      
      <Card.Img 
        variant="top" 
        src={imagen} 
        alt={title}
        className="producto-img"
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <Card.Text>{text}</Card.Text>

        <Card.Text>
          <strong>Precio:</strong> ${precio}
        </Card.Text>

        <div className="d-flex">
          <Button variant="dark">Añadir</Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default Pizzas