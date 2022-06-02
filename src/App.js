import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    // <div className="App">
    //   <Navbar />
    //     <ItemDetailContainer greeting= "Los mejores productos de limpieza para su hogar" />
    // </div>
  //

      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:id' element= {<ItemListContainer/>}/>
            <Route path='/item/:id' element= {<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;