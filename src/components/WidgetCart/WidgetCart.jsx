import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./WidgetCart.css";

const WidgetCart = ({ show, closeClickHandler }) => {
    const cartContext = useContext(CartContext);
    const items = cartContext.data.items;

    const showProducts = () => {
        return (
            <div className="cart-widget-items">
                {items.map((item) => {
                    return (
                        <div className="cart-widget-item">
                            <strong>{item.product.title}</strong>
                            <div>{item.product.description.substring(0, 20)}...</div>
                            <div><strong>Quantity:</strong>&nbsp;{item.quantity}</div>
                            <div><strong>Subtotal:&nbsp;${item.quantity * item.product.price}</strong></div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={`widget-cart ${show ? "open" : "close"}`}>
            <h2 className="cart-widget-title">My Cart</h2>
            {items.length !== 0 ? showProducts() : <p>The cart is empty.</p>}
            <div><strong>Total:&nbsp;${cartContext.totalPrice()}</strong></div>
            <div><Link to="/cart">Go to cart</Link></div>
            <button onClick={closeClickHandler}>Close cart</button>
        </div>
    );
};

export default WidgetCart;
