import React, { use, useContext, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import LoaderComponent from "./LoaderComponent";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderID] = useState("");
  const { cart, cartTotal, clear, cartQuantity } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
    getValues,
  } = useForm();

  const finalizarCompra = (dataForm) => {
    setLoading(true);
    let order = {
      buyer: {
        name: dataForm.name,
        lastname: dataForm.lastname,
        adress: dataForm.adress,
        country: dataForm.country,
        state: dataForm.state,
        city: dataForm.city,
        zc: dataForm.zc,
        email: dataForm.email,
      },
      buys: cart,
      total: Number(cartTotal().toFixed(2)),
      date: serverTimestamp(),
    };

    const sales = collection(db, "orders");
    addDoc(sales, order)
      .then((res) => {
        cart.forEach((item) => {
          const docRef = doc(db, "productos", item.id);
          getDoc(docRef)
            .then((dbDoc) => {
              updateDoc(docRef, {
                stock: dbDoc.data().stock - item.quantity,
              });
            })
            .catch((error) => console.log(error));
        });
        setOrderID(res.id);
        clear();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }
  return (
    <>
      {loading && <LoaderComponent />}
      {orderId ? (
        <Container fluid className="p-4 text-center">
          <h3>Compra realizada con exito</h3>
          <Row>
            <Col lg={6} className="mx-auto">
              <Card bg="dark" text="white" border="danger">
                <CardHeader>
                  <Row lg={12} className="mx-auto">
                    <Col >
                      <CardTitle >Resumen de Pago</CardTitle>
                    </Col>
                    <Col className="d-flex justify-content-end"></Col>
                  </Row>
                  <CardImg
                    src="https://i.postimg.cc/Jh06hrrn/gatito-llevando-car.png"
                    alt="Sales"
                    className="custom-max-height"
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <CardText>
                        Gracias por adqurir nuestros productos.
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <CardText>No. Compra:</CardText>
                      <CardTitle>{orderId}</CardTitle>
                    </Col>
                  </Row>
                  <Breadcrumb />
                  <Row>
                    <Col>
                      <Link to={"/"} className="btn btn-vilucap">
                        <GiReturnArrow /> Volver a Inicio
                      </Link>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid className="p-4">
          <h3>Información de Compra</h3>
          <Row>
            <Col lg={8}>
              <Row>
                <Card className="bg-dark text-white border-danger">
                  <CardBody>
                    <Form onSubmit={handleSubmit(finalizarCompra)} noValidate>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="fromName">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nombre"
                            className={`form-control ${
                              touchedFields.name || isSubmitted
                                ? errors.name
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("name", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 3,
                                message: "Debe tener al menos 3 caracteres",
                              },
                              maxLength: {
                                value: 20,
                                message:
                                  "El campo debe tener un maximo de 20 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.name?.message}
                          </Col>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="fromLastName">
                          <Form.Label>Apellidos</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Apellidos"
                            className={`form-control ${
                              touchedFields.lastname || isSubmitted
                                ? errors.lastname
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("lastname", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.lastname?.message}
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} controlId="fromAdress">
                          <Form.Label>Direción</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Dirección"
                            className={`form-control ${
                              touchedFields.adress || isSubmitted
                                ? errors.adress
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("adress", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.adress?.message}
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} md={4} controlId="fromCountry">
                          <Form.Label>País</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Pais"
                            className={`form-control ${
                              touchedFields.country || isSubmitted
                                ? errors.country
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("country", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.country?.message}
                          </Col>
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="fromState">
                          <Form.Label>Estado</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Estado"
                            className={`form-control ${
                              touchedFields.state || isSubmitted
                                ? errors.state
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("state", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.state?.message}
                          </Col>
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="fromCity">
                          <Form.Label>Ciudad</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ciudad"
                            className={`form-control ${
                              touchedFields.city || isSubmitted
                                ? errors.city
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("city", {
                              required: "El campo es obligatorio",
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.city?.message}
                          </Col>
                        </Form.Group>
                        <Form.Group as={Col} md={4} controlId="fromZc">
                          <Form.Label>Código Postal</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Codigo Postal"
                            className={`form-control ${
                              touchedFields.zc || isSubmitted
                                ? errors.zc
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("zc", {
                              required: "El campo es obligatorio",
                              min: {
                                value: 1,
                                message:
                                  "Código no puede ser menor a 5 carateres",
                              },
                              minLength: {
                                value: 5,
                                message: "Debe tener al menos 5 caracteres",
                              },
                              maxLength: {
                                value: 5,
                                message:
                                  "El campo debe tener un maximo de 5 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.zc?.message}
                          </Col>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} md={6} controlId="fromEmail">
                          <Form.Label>Correo Electrónico</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Correo Electronico"
                            className={`form-control ${
                              touchedFields.email || isSubmitted
                                ? errors.email
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("email", {
                              required: "El campo es obligatorio",
                              pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: "Formato de correo inválido",
                              },

                              minLength: {
                                value: 3,
                                message: "Debe tener al menos 3 caracteres",
                              },
                              maxLength: {
                                value: 40,
                                message:
                                  "El campo debe tener un maximo de 40 caracteres",
                              },
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.email?.message}
                          </Col>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md={6}
                          controlId="fromConfirmEmail"
                        >
                          <Form.Label>Confirmar Correo Electrónico</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Correo Electronico"
                            className={`form-control ${
                              touchedFields.confirmEmail || isSubmitted
                                ? errors.confirmEmail
                                  ? "is-invalid"
                                  : "is-valid"
                                : ""
                            }`}
                            {...register("confirmEmail", {
                              required: "El campo es obligatorio",
                              validate: (value) =>
                                value === getValues().email ||
                                "Los correos no coinciden",
                            })}
                          />
                          <Col className="invalid-feedback">
                            {errors?.confirmEmail?.message}
                          </Col>
                        </Form.Group>
                      </Row>
                      <Breadcrumb />
                      <Button type="submit">Confirmar</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Row>
            </Col>
            <Col lg={4} className="p-2">
              <Card bg="dark" text="white" border="danger">
                <CardHeader>
                  <Row>
                    <Col>
                      <CardTitle>Resumen</CardTitle>
                    </Col>
                    <Col className="d-flex justify-content-end"></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <CardText>No. Productos:</CardText>
                      <CardText>{cartQuantity()}</CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <CardText>Subtotal:</CardText>
                      <CardText>
                        ${" "}
                        {cartTotal().toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-between">
                      <Card.Title>Total:</Card.Title>
                      <Card.Title>
                        $
                        {cartTotal().toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Card.Title>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Checkout;
