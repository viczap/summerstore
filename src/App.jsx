import './App.css';
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <Container>
        <h1>Summer Store</h1>
        <ItemListContainer greeting="Welcome to my store!" />
      </Container>
    </>
  );
}

export default App;
