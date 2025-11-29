import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ menu }) => {
  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <p>Pizzeria Mamma Mia!</p>
              {menu.map((item, index) => (
                <Nav.Link key={index} href={item.link}>
                  {item.nombre}
                </Nav.Link>
              ))}
            </Nav>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Total: $25.000"
                aria-label="Search"
              />
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
