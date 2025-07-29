import Item from "./Item";
import Row from 'react-bootstrap/Row';

const ItemList = ({ data }) => {
  return (
    <>
    <Row xs={1} md={4} className="g-4">
        {data.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
    </Row>
    </>
  );
};
export default ItemList;
