import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import LoaderComponent from "./LoaderComponent";
import NoResult from "./NoResult";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setDetalle(null);
          setInvalid(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoaderComponent />;
  if (detalle) return <ItemDetail detalle={detalle} />;
  if (invalid) return <NoResult />;
};

export default ItemDetailContainer;
