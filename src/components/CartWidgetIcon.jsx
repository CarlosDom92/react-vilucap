import Badge from "react-bootstrap/Badge";
import { GrBasket } from "react-icons/gr";

const CartWidgetIcon = () => {
  return (
    <>
      <GrBasket color="white" fontSize={"1.3rem"} />{" "}
      <Badge bg="primary">9</Badge>
    </>
  );
};
export default CartWidgetIcon;
