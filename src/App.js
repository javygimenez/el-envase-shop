import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import CartContextProvider from './components/context/CartContext';

const App = () => {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/category/:idCategory' element= {<ItemListContainer/>}/>
              <Route path='/item/:idItem' element= {<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>  
  );
}

export default App;