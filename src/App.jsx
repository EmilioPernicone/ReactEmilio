import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './components/cartview/Cart';

const App = () => {
  const mensaje = "los mejores precios" 
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensaje} />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={mensaje} />}/>
        <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

