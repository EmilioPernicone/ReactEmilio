import React from "react";
const Item = ({product}) => {
  return (
    <>
    <h2>{product.producto}</h2>
    <img src={product.imgURL} alt="" />
    <p> precio: ${product.precio}</p>
    <button>ver detalles</button>
    </>
  )
}

export default Item;