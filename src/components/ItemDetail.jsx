import React, { useContext } from "react";
import {
  Container,
  Image,
  Card,
  Row,
  Col,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  Stack,
  Breadcrumb,
} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { TbShoppingBagSearch, TbShoppingCartDollar } from "react-icons/tb";

const ItemDetail = ({ detalle }) => {
  const { cart, addItem, itemQuantity } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
  };
  const currentStock = detalle.stock - itemQuantity(detalle.id);
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Link className="btn btn-vilucap" to="/">
            <TbShoppingBagSearch /> Seguir Comprando
          </Link>
        </Col>
      </Row>
      <Breadcrumb />
      <Row>
        <Col sm={8} md={8} lg={6}>
          <Image
            src={detalle.img}
            alt={detalle.name}
            className="rounded img-cover h-100"
          />
        </Col>
        <Col md={12} lg={6}>
          <Card className="bg-dark text-white border-danger h-100">
            <CardBody>
              <Stack gap={2}>
                <CardHeader className="h2 fw-bold border-secondary">
                  {detalle.name}
                </CardHeader>
                <Breadcrumb />
                <CardSubtitle className="lead">
                  {detalle.description}
                </CardSubtitle>
                <Breadcrumb />
                <CardText className="h4 fw-bold">$ {detalle.price}</CardText>
                <Breadcrumb />
                {currentStock > 0 ? (
                  <ItemCount stock={currentStock} onAdd={onAdd} />
                ) : (
                  <>
                    <CardSubtitle>Producto Agotado</CardSubtitle>
                    {cart.length > 0 && (
                      <Card.Link
                        as={Link}
                        to="/cart"
                        className="btn btn-vilucap icon-hover"
                      >
                        {" "}
                        <TbShoppingCartDollar /> Ver Carrito
                      </Card.Link>
                    )}
                  </>
                )}
              </Stack>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
