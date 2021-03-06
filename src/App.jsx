import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Featured products" />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
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
    </CartContextProvider>
  );
}

export default App;
