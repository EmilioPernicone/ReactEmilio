import React, {useState} from 'react';
import {ItemCount} from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({ listProduct }) => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { addToCart, cartList } = useCartContext();
  
  const onAdd = (quantity) => {
    addToCart(listProduct, quantity);
    setIsButtonPressed(true);
  }
    


  return (
    <>
      <div >
        <h3>{listProduct.category}</h3>
        <img src={listProduct.image} alt="img" />
      </div>

      <div >
        <h4>{listProduct.title}</h4>
        <p>{listProduct.description}</p>
        <p className='price'>Precio: ${listProduct.price}</p>  
      </div>
       
      <div>
        {!isButtonPressed ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </div> 
    </>
    
  )
}
export default ItemDetail