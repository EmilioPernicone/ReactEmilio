import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count,setCount]= useState(initial)
    const increase =() => count < stock && setCount(count + 1)
    const decrease =() => count > initial && setCount(count - 1)
    return(
      <>
       <button onClick={decrease}>-</button>
       <h2>{count}</h2>
       <button onClick={increase}>+</button>
       <button onClick={onAdd}>Agregar al carrito</button>
      </>
    )
}
export default ItemCount;