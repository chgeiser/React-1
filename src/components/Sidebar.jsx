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
              {menu.map((item, index) => (
                <Nav.Link key={index} href={item.link}>
                  {item.nombre}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
