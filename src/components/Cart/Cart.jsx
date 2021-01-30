import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import { useHistory } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const cartContext = useContext(CartContext);
    const items = cartContext.data.items;
    const history = useHistory();

    const removeItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const goToCheckoutHandler = () => {
        history.push("/checkout");
    };

    const goToShoppingHandler = () => {
        history.push("/");
    };

    const showProducts = () => {
        return (
            <div className="cart-items">
                {items.map((item) => {
                    return (
                        <div key={item.product.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.product.pictureUrl} alt={item.product.title} />
                            </div>
                            <div className="cart-item-description">
                            <div className="title">{item.product.title}</div>
                            <div>
                                {item.product.description.substring(0, 100)}...
                            </div>
                            <div>
                                <strong>Quantity:</strong>&nbsp;{item.quantity}
                            </div>
                            <div>
                                <strong>
                                    Subtotal:&nbsp;$
                                    {item.quantity * item.product.price}
                                </strong>
                            </div>
                            <button
                                className="remove-button"
                                onClick={() =>
                                    removeItemHandler(item.product.id)
                                }
                            >
                                Remove Item
                            </button>
                            </div>
                        </div>
                    );
                })}
                <div className="cart-total-price">
                    Total:&nbsp;${cartContext.totalPrice()}
                </div>
                <button
                        className="checkout-button"
                        onClick={goToCheckoutHandler}
                    >
                        Go to Checkout!
                    </button>
            </div>
        );
    };

    return (
        <div className="cart-container">
            <h2>My Cart</h2>
            {items.length ? (
                showProducts()
            ) : (
                <>
                    <p>Your cart is empty.</p>
                    <button
                        className="checkout-button"
                        onClick={goToShoppingHandler}
                    >
                        Go to Shopping!
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
