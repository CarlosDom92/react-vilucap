import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import LoaderComponent from "./LoaderComponent";

const ListItemContainer = ({ titulo, descripcion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = category
      ? query(
          collection(db, "productos"),
          where("category", "array-contains", category)
        )
      : collection(db, "productos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Container fluid className="dark">
          <Row>
            <Col>
              <h1>{titulo}</h1>
              <p>{descripcion}</p>
              <ItemList data={data} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default ListItemContainer;
