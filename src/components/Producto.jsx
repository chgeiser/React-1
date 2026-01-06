import "../assets/css/Producto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Producto = ({ title, text, precio, imagen }) => {
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

        <div className="d-flex justify-content-between">
          <Button variant="light">Ver más</Button>
          <Link to={"/pizzas"}>Agregar</Link>
        </div>

      </Card.Body>
    </Card>
  );
};

export default Producto;
