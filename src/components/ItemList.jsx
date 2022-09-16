import React from 'react'
import Item from './Item'

export const ItemList = ({ listProducts }) => {
  return (
    <>
        {listProducts.map ((prod,i) => <Item key={`${prod.id}-${i}`} product={prod}/>)}
    </>
    )
}
export default ItemList;