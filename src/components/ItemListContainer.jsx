import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState,useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';


  const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
  
      const getItem = async () => {
  
        try {
          const res = await fetch('https://fakestoreapi.com/products/category/electronics');
          const data = await res.json();
          setListProducts(data);
        }
        catch(err) {
          console.log("Error:", err);
          console.error("Error:", err);
        }
        finally {
          setLoading(false);
        }
      }
  
      getItem();
  
    },[])

  return (
    <>
      <h1>Benvenidos, {greeting}</h1>
      {loading ? "Cargando lista..." : <ItemList listProducts={listProducts}/>}
      <ItemDetailContainer/>
      <ItemCount initial={1} stock={5} onAdd={() => {}} />
    </>

  )
}
export default ItemListContainer;