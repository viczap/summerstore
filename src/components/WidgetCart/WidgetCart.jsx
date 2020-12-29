import './WidgetCart.css';

const WidgetCart = ({show, closeClickHandler}) => {
    return (
        <div className={`widget-cart ${show ? 'open' : 'close'}`}>
            <h2>My Cart</h2>
            <p>The cart is empty.</p>
            <button onClick={closeClickHandler}>Close cart</button>
        </div>
    );
}

export default WidgetCart;