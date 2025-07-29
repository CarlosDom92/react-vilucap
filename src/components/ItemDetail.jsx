import React from "react";
import {
  Container,
  Image,
  Card,
  Row,
  Col,
  Button,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  Stack,
} from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  
  const onAdd=(cantidad)=>{
    console.log(`Agregaste ${cantidad} de produtos`)
  }
  return (
    <Container className="p-4">
      <Row>
        <Col sm={8} md={8} lg={6}>
          <Image
            src={detalle.img}
            alt={detalle.name}
            className="rounded img-cover h-100"
          />
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <CardBody>
              <Stack gap={2}>
                <CardHeader className="h2 fw-bold">{detalle.name}</CardHeader>
                <CardSubtitle className="lead">
                  {detalle.description}
                </CardSubtitle>
                <CardText className="h4 fw-bold">$ {detalle.price}</CardText>
                <ItemCount stock={detalle.stock} onAdd={onAdd}></ItemCount>
              </Stack>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
