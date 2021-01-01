import { Button } from 'react-bootstrap';
import './ProductDetail.css';
import { useHistory } from 'react-router-dom';

const ProductDetail = ({product}) => {

    const history = useHistory();
    const CART_URL = '/cart'; 

    const handleAddToCartClick = e => {
        history.push(CART_URL);
    };

    return (
        <div className="productDetail">  
            <div className="image">
                <img alt="product" src={product.pictureUrl} />
            </div>
            <div className="productInfo">
                <h2>{product.title}</h2>

                <h4>Description</h4>
                <div>{product.description}</div>
                <div><strong>Price: </strong>$ {product.price}</div>
                <div><strong>Stock: </strong>{product.stock} Units</div>
                
                <Button variant="primary" onClick={handleAddToCartClick}>Add to Cart</Button>
            </div>
        </div>
    ); 
};

export default ProductDetail;