import './App.css';
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar />
      <h1>Summer Store</h1>
      <ItemListContainer greeting="Welcome to my store!" />
    </div>
  );
}

export default App;
