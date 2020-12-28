import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <h1>Summer Store</h1>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Featured products" />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting="Categorized products" />
          </Route>
          <Route path="/product/:productId">
            <ProductDetailContainer />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
