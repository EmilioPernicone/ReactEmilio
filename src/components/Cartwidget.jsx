import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {

  const { totalQuantity } = useCartContext();
  return (
      <>
    <div>
      <ShoppingCartCheckoutIcon fontSize="large"/>
      <p className='totalQuantity'>{totalQuantity()}</p>
    </div>
      </>
  )
}

export default CartWidget;