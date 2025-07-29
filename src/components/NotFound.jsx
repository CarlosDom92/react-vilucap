import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Container border="danger">
        <Row className="justify-content-md-center">
          <Col md="auto w-100">
            <DotLottieReact
              src="/src/mock/error404.json"
              loop
              autoplay
              className="not-found"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>¡Oh, oh! Estás perdido.</h2>
            <p className="lead">La página que buscas no existe. Cómo llegaste aquí es un misterio. Pero puedes hacer clic en el botón de abajo para volver a la página principal.</p>
            <br/>
            <Link className="btn btn-primary" to="/">Volver a Inicio</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
