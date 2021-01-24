import './ProductDetail.css';
import { useHistory } from 'react-router-dom';
import ProductItemCount from '../ProductItemCount/ProductItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductDetail = ({product}) => {

    const CART_URL = '/cart'; 
    const [count, setCount] = useState(1);
    const history = useHistory();
    const cartContext = useContext(CartContext);

    const onAdd = (stock) => {
        if (count === parseInt(stock)) {
            console.log("No more stock to add.");
            return;
        }
        setCount(count + 1);
    };

    const onRemove = (stock) => {
        if (count === 1) {
            console.log("Nothing to remove.");
            return;
        }
        setCount(count - 1);
    };

    const addToCartHandler = (e) => {
        console.log(`Adding to the cart: [product=${product.id}, count=${count}]`);
        cartContext.addItem(product, count);
        history.push(CART_URL);
    };

    return (
        <div className="product-detail">  
            <div className="image">
                <img alt="product" src={product.pictureUrl} />
            </div>
            <div className="productInfo">
                <h2>{product.title}</h2>

                <h4>Description</h4>
                <div>{product.description}</div>
                <div><strong>Price: </strong>$ {product.price}</div>
                <div><strong>Stock: </strong>{product.stock} Units</div>

                <ProductItemCount
                    count={count}
                    onAdd={() => onAdd(product.stock)}
                    onRemove={() => onRemove(product.stock)}
                />
                
                <button className="add-to-cart-button" onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </div>
    ); 
};

export default ProductDetail;