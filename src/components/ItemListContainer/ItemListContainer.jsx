import ProductItemList from "../ProductItemList/ProductItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {    
    
    return (
        <div className="item-list-container">
            <h2 className="subtitle">{props.greeting}</h2>
            <ProductItemList />
        </div>
    );
}

export default ItemListContainer;