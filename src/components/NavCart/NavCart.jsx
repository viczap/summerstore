import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { useContext } from 'react';

import "./NavCart.css";
import { CartContext } from "../../context/CartContext";

const NavCart = ({ clickHandler }) => {

    const cartContext = useContext(CartContext);
    const qty = cartContext.cartQuantity();

    return (
        qty ?
        <div>
            <FontAwesomeIcon
                onClick={clickHandler}
                className="cart"
                icon={faShoppingCart}
                inverse
                size="lg"
            />
            <Badge variant="primary">{cartContext.cartQuantity()}</Badge>
        </div> : ''
    );
};

export default NavCart;
