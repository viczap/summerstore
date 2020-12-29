import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProductItemCount from '../ProductItemCount/ProductItemCount';
import { Link } from 'react-router-dom';
import './ProductItem.css'; 

const ProductItem = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                <ProductItemCount stock={product.stock} />
                <Button variant="primary" className="add-to-cart">Add to cart</Button>
                <div>
                    <Link className="check-product-details" to={`/product/${product.id}`}>Check for details</Link>
                </div>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Current stock: {product.stock}</small>
            </Card.Footer>
        </Card>
    );
};

export default ProductItem;