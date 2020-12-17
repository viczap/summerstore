import ProductItemList from "../ProductItemList/ProductItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {    
    
    return (
        <>
            <h2 className="subtitle">{props.greeting}</h2>
            <ProductItemList />
        </>
    );
}

export default ItemListContainer;