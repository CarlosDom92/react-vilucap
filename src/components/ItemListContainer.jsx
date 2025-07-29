import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../mock/AsyncService";
import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ListItemContainer = ({ titulo, descripcion }) => {
  const [data,setData] = useState([])
 const {category} = useParams()
  useEffect(()=>{
    getProducts()
    .then((respuesta)=>{
      if(category){
        // const filtrados = productos.filter(item => item.categoria.includes("hombre"));

        setData(respuesta.filter((prod)=>prod.category.includes(category)))
      }else{
        setData(respuesta)
      }
    })
    .catch((error)=>console.log(error))
  })
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
          <ItemList data={data}/>
        </Col>
      </Row>
    </Container>
  );
};
export default ListItemContainer;
