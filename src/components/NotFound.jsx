import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Container border="danger">
        <Row className="justify-content-md-center">
          <Col md="auto w-100 text-center">
            <Image
              src="https://i.postimg.cc/jj6HKBN5/gatito-error-404.png"
              alt="eror 404"
              className="not-found"
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <h2>¡Oh, oh! Estás perdido.</h2>
            <p className="lead">
              La página que buscas no existe.
              <br />
              Cómo llegaste aquí es un misterio.
              <br />
              Pero puedes hacer clic en el botón de abajo para volver a la
              página principal.
            </p>
            <br />
            <Link className="btn btn-primary" to="/">
              <GiReturnArrow /> Volver a Inicio
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
