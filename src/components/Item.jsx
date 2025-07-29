import { Button, Card, CardHeader, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ product }) => {
  return (
    <Col className="d-flex">
      <Card className="card">
        <CardHeader className="h-75">
          <Card.Img
            variant="top"
            src={product.img}
            alt={product.name}
            className="img-cover"
          />
        </CardHeader>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link className="btn btn-primary" to={`/item/${product.id}`}>
            Detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
