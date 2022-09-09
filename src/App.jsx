

import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer  from './components/ItemListContainer';
const App = () => {
  const mensaje = "los mejores precios" 
  return (
    <> 
    <Navbar />
    <ItemListContainer greeting={mensaje}/>
    </>
  )
}

export default App;

