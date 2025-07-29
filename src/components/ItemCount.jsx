import React, { useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { Form } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const addProduct = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const removeProduct = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const buy = ()=>{
    onAdd(count)
  }

  return (
    <>
      <Row>
        <Col>
          <ListGroup horizontal>
            <ListGroupItem>
              <Button variant="danger" onClick={removeProduct}>
                -
              </Button>
            </ListGroupItem>
            <ListGroupItem>{count}</ListGroupItem>
            <ListGroupItem>
              <Button variant="success" onClick={addProduct}>
                +
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-grid gap-2">
          <Button variant={count>0?'primary':'danger'} disabled={count < 1} size="lg" onClick={buy}>
            <MdAddShoppingCart/> Añadir a Carrito
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemCount;
