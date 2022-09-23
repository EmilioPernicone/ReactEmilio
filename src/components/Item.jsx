import React from "react";
const Item = ({product}) => {
  return (
    <>
    <h2>{product.producto}</h2>
    <img src={product.image} alt="" />
    <p> precio: ${product.price}</p>
    <button>ver detalles</button>
    </>
  )
}

export default Item;