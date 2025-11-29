import "../components/Producto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
          <Button variant="primary">Ver más</Button>
          <Button variant="dark">Añadir</Button>
        </div>

      </Card.Body>
    </Card>
  );
};

export default Producto;
