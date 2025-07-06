import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcon from "./CartWidgetIcon";

function Navbars() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand
          href="#home"
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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Gorras</Nav.Link>
            <Nav.Link href="#link2">Mujer</Nav.Link>
            <Nav.Link href="#link3">Niños</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Snapback</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Trucker</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deportivas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Edición Limitada
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Urbano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Vintage</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Minimalista
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Ajustable</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Bordado</NavDropdown.Item>
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
