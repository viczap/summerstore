import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./WidgetCart.css";
    
const WidgetCart = ({ show, closeClickHandler }) => {
    const cartContext = useContext(CartContext);
    const items = cartContext.data.items;
    const history = useHistory();

    const showProducts = () => {
        return (
            <>
                <div className="cart-widget-items">
                    {items.map((item) => {
                        return (
                            <div
                                key={item.product.id}
                                className="cart-widget-item"
                            >
                                <strong className="title">
                                    {item.product.title}
                                </strong>
                                <div className="description">
                                    {item.product.description.substring(0, 45)}
                                    ...
                                </div>
                                <div className="quantity-price">
                                    <strong>{item.quantity}</strong> unit(s) x{" "}
                                    <strong>${item.product.price}</strong>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    const goToCartHandler = () => {
        closeClickHandler();
        history.push("/cart");
    };

    return (
        <div className={`widget-cart ${show ? "open" : "close"}`}>
            <div class="widget-cart-header">
                <h2 className="cart-widget-title">My Cart</h2>
                <button className="close-button" onClick={closeClickHandler}>
                    X
                </button>
            </div>

            {items.length !== 0 ? (
                <>{showProducts()}</>
            ) : (
                <p>The cart is empty.</p>
            )}

            <div className={`cart-widget-footer ${show ? "open" : "close"}`}>
                <div className="total-price">
                    <strong>Total:&nbsp;${cartContext.totalPrice()}</strong>
                </div>
                <button class="go-to-cart-button" onClick={goToCartHandler}>
                    Go to Cart
                </button>
            </div>
        </div>
    );
};

export default WidgetCart;
