import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcon from "./CartWidgetIcon";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary sticky-top"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            alt="Logo"
            src="/logo-vilu.svg"
            width="100"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          ViluCap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/categories/hombre" >Gorras</Nav.Link>
            <Nav.Link as={Link} to="/categories/mujer">Mujer</Nav.Link>
            <Nav.Link as={Link} to="/categories/niños">Niños</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categories/Snapback">Snapback</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Trucker">Trucker</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/EdicionLimitada">
                Edición Limitada
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/categories/Urbano">Urbano</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Vintage">Vintage</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Minimalista">
                Minimalista
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Ajustable">Ajustable</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categories/Bordado">Bordado</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#cart">
            <CartWidgetIcon />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
