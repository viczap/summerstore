import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return (
        <h2 className="subtitle">{props.greeting}</h2>        
    );
}

export default ItemListContainer;