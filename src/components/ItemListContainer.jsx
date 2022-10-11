import React from 'react';
import {ItemCount} from './ItemCount';
import ItemList from './ItemList';
import { useState,useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { API } from '../constante/api';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
import { getDocs, collection, query, where }from 'firebase/firestore';

  const ItemListContainer = ({ greeting }) => {

    let { id } = useParams();
    const { category} = useParams();
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const productCollection = collection(db,'product');
      const q = query(productCollection, where("category", "==", `${category}`));
    
      let url = (category === undefined ? productCollection : q )
    
       
      getDocs(url)
    .then((data)=>{
      
  const lista = data.docs.map((product)=>{
    return {
      ...product.data(),
      id :product.id
    }
  })
  setListProducts(lista);
})
.finally(()=>{
  setLoading(false);
})


  },[category])

  return (
    <>
      <h1>Benvenidos, {greeting}</h1>
      {loading ? "Cargando lista..." : <ItemList listProducts={listProducts}/>}
 
    </>

  )
}
export default ItemListContainer;