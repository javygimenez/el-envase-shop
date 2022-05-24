import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <ItemListContainer greeting= "Los mejores productos de limpieza para su hogar" />
    </div>
  );
}

export default App;