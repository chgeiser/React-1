import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Sidebar = ({ menu }) => {
  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
              {menu.map((item) => (
                <Link key={item.nombre} to={item.link} style={{ marginRight: "20px" }}>
                  {item.nombre}
                </Link>
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
          </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
