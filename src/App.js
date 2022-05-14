import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <ItemListContainer greeting= "Los mejores productos para la limpieza del hogar!!!" />
    </div>
  );
}

export default App;
