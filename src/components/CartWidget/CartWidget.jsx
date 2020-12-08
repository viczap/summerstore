import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <FontAwesomeIcon className="cart" icon={faShoppingCart} inverse size="lg" />
    );
}

export default CartWidget;