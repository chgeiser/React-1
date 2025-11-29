import "../components/Producto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.jpg';


const Producto = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Ingredientes:</Card.Text>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>Precio: {props.precio}</Card.Text>
        <Button variant="primary">Ver Más</Button>
        <Button variant="primary">Añadir</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Producto;
