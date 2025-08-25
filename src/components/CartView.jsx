import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { FaCartArrowDown, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { BsCartX } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { TbShoppingBagSearch } from "react-icons/tb";
import Swal from "sweetalert2";

const CartView = () => {
  const navigate = useNavigate();
  const { clear, removeItem, cartTotal, cartQuantity, cart } =
    useContext(CartContext);

  const emptyCart = (tipo, nameItem, idItem) => {
    const urlImg =
      tipo === 1
        ? "https://i.postimg.cc/7ZLqygyF/gatito-vaciando.png"
        : "https://i.postimg.cc/x89W32fw/gatito-sacando.png";
    const msj =
      tipo === 1
        ? "Oops...Estas apunto de vaciar tu carrito"
        : 'Vas a eliminar "' + nameItem + '" de tu carrito';
    Swal.fire({
      imageUrl: urlImg,
      imageHeight: 150,
      title: msj,
      text: "¿Estas seguro de continuar?",
      theme: "dark",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        if (tipo === 1) {
          clear();
        } else {
          removeItem(idItem);
        }
      }
    });
  };

  const returnHome = () => {
    navigate("/");
  };
  return (
    <Row className="p-5">
      <Container fluid>
        <Row className="g-5">
          <Col>
            <Button variant="vilucap" className="w-5" onClick={returnHome}>
              <TbShoppingBagSearch /> Seguir Comprando
            </Button>
          </Col>
        </Row>
        <Row className="g-5">
          <Col lg={8}>
            <Table responsive variant="dark">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod) => (
                  <tr>
                    <td>
                      <div className="">
                        <img
                          style={{ width: "53px" }}
                          src={prod.img}
                          alt={prod.name}
                        />
                      </div>
                      <span>{prod.name}</span>
                      {/* border border-translucent rounded-2 */}
                    </td>
                    <td>{prod.price}</td>
                    <td>{prod.quantity}</td>
                    <td>
                      {(prod.price * prod.quantity).toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>
                      <button
                        className="text-body-quaternary text-body-tertiary-hover me-2 btn btn-link btn-sm"
                        onClick={() => emptyCart(2, prod.name, prod.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col lg={4}>
            <Card bg="dark" text="white" border="danger">
              <CardHeader>
                <Row>
                  <Col>
                    <CardTitle>Resumen</CardTitle>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      onClick={() => emptyCart(1, null, null)}
                    >
                      <BsCartX /> Vaciar Carrito
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="d-flex justify-content-between">
                    <CardText>No. Productos:</CardText>
                    <CardText>{cartQuantity()}</CardText>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-between">
                    <CardText>Subtotal:</CardText>
                    <CardText>
                      ${" "}
                      {cartTotal().toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </CardText>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-between">
                    <Card.Title>Total:</Card.Title>
                    <Card.Title>
                      $
                      {cartTotal().toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link className="w-100 btn btn-primary" to={"/checkuot"}>
                      {" "}
                      <FaCartArrowDown /> Proceder a Pago
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default CartView;
