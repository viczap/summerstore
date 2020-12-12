import CardDeck from 'react-bootstrap/CardDeck'
import ProductItem from "../ProductItem/ProductItem";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    
    const products = [
        {name: 'Product 1', description : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', stock : '3'},
        {name: 'Product 2', description : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', stock : '5'},
        {name: 'Product 3', description : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', stock : '10'},
        {name: 'Product 4', description : 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', stock : '8'}
    ];

    const getProductItems = () => {
        return products.map(p => <ProductItem name={p.name} description={p.description} stock={p.stock} />)
    }
    
    return (
        <>
            <h2 className="subtitle">{props.greeting}</h2>
            <CardDeck>
                { getProductItems() }
            </CardDeck>
        </>
    );
}

export default ItemListContainer;