import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer  from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from './components/cartview/Cart';
import { CartContextProvider } from './context/CartContext'
import Formularios from "./formulario/Formularios";

const App = () => {
  const mensaje = "los mejores precios" 
  return (
    <>
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensaje} />}/>
        <Route path='/category/:category' element={<ItemListContainer greeting={mensaje} />}/>
        <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<CartView />}/>
        <Route path='/Formularios' element={<Formularios />}/>
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  </>
  );
}

export default App;

