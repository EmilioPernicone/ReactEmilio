import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {products} from '../assests/products';
import {customFetch} from '../utils/customFetch';
import { useState,useEffect } from 'react';


const ItemListContainer = ({greeting}) => {
  const [listProducts, setListProducts]= useState([])
  const [loading,setLoading]=useState(true);
  useEffect(()=> {
    customFetch(products)
    .then (res => {
      setLoading(false)
      setListProducts(res)})
      
  },[])

  return (
    <>
      <h1>Benvenidos, {greeting}</h1>
      {loading ? "Cargando lista..." : <ItemList listProducts={listProducts}/>}
      <ItemCount initial={1} stock={5} onAdd={() => {}} />
    </>

  )
}
export default ItemListContainer;