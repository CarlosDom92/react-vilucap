import React from "react";
import SuggestedProduct from "./SuggestedProduct";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const EmptyCart = () => {
  return (
    <Container fluid className="pt-4 mb-9 p-5">
      <Row>
        <Col>
          <Card className="bg-dark text-white border-danger text-center">
            <CardHeader>
              <CardImg
                src="https://i.postimg.cc/XNdw80Gz/empty-cart.png"
                alt="Empty Cart"
                className="custom-max-height"
              />
            </CardHeader>
            <CardBody>
              <CardTitle className="text-danger">
                Parece que tu carrito está vacío.
              </CardTitle>
              <Card.Link as={Link} to="/" className="btn btn-primary">
                <GiReturnArrow /> Volver a Inicio
              </Card.Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <SuggestedProduct />
    </Container>
  );
};

export default EmptyCart;
