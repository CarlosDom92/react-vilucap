import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcon from "./CartWidgetIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbars() {
  const [expanded, setExpanded] = useState(true);

  const handleNavClick = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary sticky-top"
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex justify-content-center align-items-center"
          onClick={handleNavClick}
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/hombre"
              onClick={handleNavClick}
            >
              Hombre
            </Nav.Link>
            <Nav.Link as={Link} to="/categories/mujer" onClick={handleNavClick}>
              Mujer
            </Nav.Link>
            <Nav.Link as={Link} to="/categories/niños" onClick={handleNavClick}>
              Niños
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/categories/Snapback"
                onClick={handleNavClick}
              >
                Snapback
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Trucker"
                onClick={handleNavClick}
              >
                Trucker
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/EdicionLimitada"
                onClick={handleNavClick}
              >
                Edición Limitada
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/categories/Urbano"
                onClick={handleNavClick}
              >
                Urbano
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Vintage"
                onClick={handleNavClick}
              >
                Vintage
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Minimalista"
                onClick={handleNavClick}
              >
                Minimalista
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Ajustable"
                onClick={handleNavClick}
              >
                Ajustable
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Bordado"
                onClick={handleNavClick}
              >
                Bordado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            as={Link}
            to="/cart"
            className="p-4"
            onClick={handleNavClick}
          >
            <CartWidgetIcon />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
