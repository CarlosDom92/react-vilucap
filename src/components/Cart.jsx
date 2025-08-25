import React, { useContext } from "react";
import EmptyCart from "./EmptyCart";
import CartView from "./CartView";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  
  return <>{cart.length>0 ? <CartView /> : <EmptyCart />}</>;
};

export default Cart;
