import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import SuggestedProduct from "./SuggestedProduct";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardLink,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const NoResult = () => {
  return (
    <>
      <Container fluid className="p-3">
        <Row>
          <Col>
            <Card className="bg-dark text-white border-danger text-center">
              <CardHeader>
                <CardImg
                  src="https://i.postimg.cc/FK1bcJg3/no-search.png"
                  alt="Sin Resultados"
                  className="custom-max-height"
                />
              </CardHeader>
              <CardBody>
                <Card.Title className="text-danger">
                  No se encontraron detalles del producto seleccionado.
                </Card.Title>
                <CardLink as={Link} to="/" className="btn btn-primary">
                  <GiReturnArrow /> Volver a Inicio
                </CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <SuggestedProduct />
    </>
  );
};

export default NoResult;
