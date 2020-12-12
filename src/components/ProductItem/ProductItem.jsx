import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProductItemCount from '../ProductItemCount/ProductItemCount';

const ProductItem = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <ProductItemCount stock={props.stock} />
                <Button variant="primary" className="add-to-cart">Add to cart</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Current stock: {props.stock}</small>
            </Card.Footer>
        </Card>
    );
};

export default ProductItem;