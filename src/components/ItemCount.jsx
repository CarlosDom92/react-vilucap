import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import { TbShoppingCartDollar } from "react-icons/tb";
import { Form, useNavigate } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [viewCart, setviewCart] = useState(false);

  const notify = () =>
    toast.success("Producto agregado a tu Carrito!", { removeDelay: 500 });

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

  const buy = () => {
    onAdd(count);
    setviewCart(true);
    notify();
  };

  const returnHome = () => {
    navigate("/");
  };

  const goCart = () => {
    navigate("/cart");
  };

  return (
    <>
      {!viewCart && (
        <>
          <Row className="bg-dark text-white">
            <Col>
              <ListGroup horizontal>
                <ListGroupItem className="bg-dark bg-dark text-white border-danger">
                  <Button variant="danger" onClick={removeProduct}>
                    -
                  </Button>
                </ListGroupItem>
                <ListGroupItem className="bg-dark text-white border-danger">
                  {count}
                </ListGroupItem>
                <ListGroupItem className="bg-dark text-white border-danger">
                  <Button variant="success" onClick={addProduct}>
                    +
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          {stock < 3 && (
            <p className="text-danger">Solo hay {stock} unidades en estock.</p>
          )}
          <Breadcrumb />
          <Col className="d-grid gap-2">
            <Button
              variant={count > 0 ? "primary" : "danger"}
              disabled={count < 1}
              size="lg"
              onClick={buy}
            >
              <MdAddShoppingCart /> Añadir a Carrito
            </Button>
          </Col>
        </>
      )}

      {viewCart && (
        <>
          <Breadcrumb />
          <Breadcrumb />
          <Row>
            <Col className="d-grid gap-2">
              <Button variant="vilucap" className="icon-hover" onClick={goCart}>
                {" "}
                <TbShoppingCartDollar /> Ver Carrito
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ItemCount;
