import { Container, Row, Col } from "react-bootstrap";

const ListItemContainer = ({ titulo, descripcion }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ListItemContainer;
