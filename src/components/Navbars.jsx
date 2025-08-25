import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetIcon from "./CartWidgetIcon";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbars() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);
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
          onClick={() => setExpanded(false)}
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
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/hombre"
              onClick={() => setExpanded(false)}
            >
              Hombre
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/mujer"
              onClick={() => setExpanded(false)}
            >
              Mujer
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/niños"
              onClick={() => setExpanded(false)}
            >
              Niños
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/categories/Snapback"
                onClick={() => setExpanded(false)}
              >
                Snapback
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Trucker"
                onClick={() => setExpanded(false)}
              >
                Trucker
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/EdicionLimitada"
                onClick={() => setExpanded(false)}
              >
                Edición Limitada
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/categories/Urbano"
                onClick={() => setExpanded(false)}
              >
                Urbano
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Vintage"
                onClick={() => setExpanded(false)}
              >
                Vintage
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Minimalista"
                onClick={() => setExpanded(false)}
              >
                Minimalista
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Ajustable"
                onClick={() => setExpanded(false)}
              >
                Ajustable
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/categories/Bordado"
                onClick={() => setExpanded(false)}
              >
                Bordado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            as={Link}
            to="/cart"
            className="p-4"
            onClick={() => setExpanded(false)}
          >
            <CartWidgetIcon />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
