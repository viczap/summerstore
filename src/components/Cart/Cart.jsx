import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartContext = useContext(CartContext);
    const items = cartContext.data.items;

    const removeItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const showProducts = () => {
        return (
            <div className="cart-widget-items">
                {items.map((item) => {
                    return (
                        <div className="cart-widget-item">
                            <strong>{item.product.title}</strong>
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
                            <Button
                                onClick={() =>
                                    removeItemHandler(item.product.id)
                                }
                            >
                                Remove Item
                            </Button>
                        </div>
                    );
                })}
                <div>
                    <strong>Total:&nbsp;${cartContext.totalPrice()}</strong>
                </div>
            </div>
        );
    };

    return (
        <>
            <h2>My Cart</h2>
            {items.length ? (
                showProducts()
            ) : (
                <>
                    <p>Your cart is empty.</p>
                    <div>
                        <Link to="/">Go to shopping</Link>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
