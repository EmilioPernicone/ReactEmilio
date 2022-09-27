import React from "react";
import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <>
    <h2>{product.producto}</h2>
    <img src={product.image} alt="" />
    <p> precio: ${product.price}</p>
    <Link to={`/product/${product.id}`}>
            Ver Detalles
          </Link>
    </>
  )
}

export default Item;