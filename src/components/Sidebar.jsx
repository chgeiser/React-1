import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {  NavLink } from "react-router-dom";

const Sidebar = ({ menu }) => {

const estiloActivo = ({isActive}) => `text-${isActive ? "warning" : "primary" } ms-3 text-decoration-none`;
  

  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
              {menu.map((item) => (
                <NavLink key={item.nombre} to={item.link} style={{ marginRight: "20px" }} 
                className = {estiloActivo}>
                  {item.nombre}                 
                </NavLink>
              ))}
            </Nav>
           <form className="d-flex" role="search">
           
            <input
              className="form-control me-2"
              type="search"
              placeholder="Total: $25.000"
              aria-label="Total del carrito"
              disabled
            />
            <NavLink to="/cart" className = {estiloActivo}>Carrito</NavLink>
          
          </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
