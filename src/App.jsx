import './App.css';
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

function App() {
  
  const showList = false;

  return (
    <>
      <NavBar />
      <Container>
        <h1>Summer Store</h1>
        { showList ?
            <ItemListContainer greeting="Welcome to my store!" />
          :
            <ProductDetailContainer />
        }
      </Container>
    </>
  );
}

export default App;
