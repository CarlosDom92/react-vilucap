import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const SuggestedProduct = () => {
  const [productRamdom, setProductRandom] = useState([]);
  useEffect(() => {
    const docRefRamdom = collection(db, "productos");

    getDocs(docRefRamdom)
      .then((res) => {
        const listRandom = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        const aleatorios = listRandom
          .sort(() => Math.random() - 0.5) // mezclar array
          .slice(0, 3); // tomar 3

        setProductRandom(aleatorios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container fluid>
      <Breadcrumb />
      <Row>
        <Col className="bg-dark text-white">
          <CardHeader>
            <Card.Title>Te podría interesar</Card.Title>
          </CardHeader>
          <CardBody>
            <Row className="mt-2 g-3">
              {productRamdom.length > 0
                ? productRamdom.map((prod) => (
                    <Col xs={12} md={4} lg={4} className="p-2">
                      <Card className="bg-dark text-white border-danger h-100">
                        <CardImg
                          src={prod.img}
                          alt={prod.name}
                          style={{ height: "200px", objectFit: "contain" }}
                        />
                        <CardBody>
                          <Card.Title>{prod.name}</Card.Title>
                          <Card.Text>{prod.description}</Card.Text>
                        </CardBody>
                        <Card.Link
                          as={Link}
                          to={`/item/${prod.id}`}
                          className="btn btn-primary m-2"
                        >
                          Detalle
                        </Card.Link>
                      </Card>
                    </Col>
                  ))
                : "No hay productos disponibles."}
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Container>
  );
};

export default SuggestedProduct;
