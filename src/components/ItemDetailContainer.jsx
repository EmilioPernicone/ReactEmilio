import React, { useState, useEffect } from "react";
import  ItemDetail  from "./ItemDetail";
import { API } from "../constante/api";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

      const [listProduct, setListProduct] = useState({});
      const [loading, setLoading] =useState(true);
      const { id } = useParams();
  
      useEffect(() => {
        const productCollection = collection(db, 'product');
        const docRef = doc(productCollection,id)
        console.log(docRef);
        getDoc(docRef)
        .then((resultado) => {
          setListProduct(
            {
              ...resultado.data(),
              id: resultado.id,
            }
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);
  
  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : 'cargando'}
    </>
  );

};

export default ItemDetailContainer;