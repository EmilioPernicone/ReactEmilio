import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  const mensaje = "los mejores precios" 
  return (
    <> 
    <Navbar />
    <ItemListContainer greeting={mensaje}/>
    <ItemDetailContainer/>
    </>
  )
}

export default App;

