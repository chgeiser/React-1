import "../assets/css/Producto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom";

const Producto = ({ title, text, precio, imagen }) => {

  const navigate = useNavigate();
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
          <Button variant="light" onClick={()=> navigate('/detalles')}>Ver más</Button>
          <NavLink to={"/pizzas"}>Agregar</NavLink>
        </div>

      </Card.Body>
    </Card>
  );
};

export default Producto;
