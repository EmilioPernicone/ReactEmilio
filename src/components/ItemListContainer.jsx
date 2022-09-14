import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <h1>Benvenidos, {greeting}</h1>
      <ItemCount initial={1} stock={5} onAdd={() => {}} />
    </>

  )
}
export default ItemListContainer;