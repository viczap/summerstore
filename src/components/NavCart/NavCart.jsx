import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavCart.css'

const NavCart = ({clickHandler}) => {
    return (
        <FontAwesomeIcon onClick={clickHandler} className="cart" icon={faShoppingCart} inverse size="lg" />
    );
}

export default NavCart;