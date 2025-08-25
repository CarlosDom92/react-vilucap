import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { GrBasket } from "react-icons/gr";
import { CartContext } from "../context/CartContext";

const CartWidgetIcon = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  return (
    <>
      <GrBasket color="orange" fontSize={"1.3rem"} />{" "}
      {cart.length > 0 && <Badge bg="primary">{cartQuantity()}</Badge>}
    </>
  );
};
export default CartWidgetIcon;
