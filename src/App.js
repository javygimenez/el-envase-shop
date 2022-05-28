import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <ItemDetailContainer greeting= "Los mejores productos de limpieza para su hogar" />
    </div>
  );
}

export default App;