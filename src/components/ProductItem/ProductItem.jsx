import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductItemCount from "../ProductItemCount/ProductItemCount";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import { useState, useContext } from "react";
import { CartContext } from './../../context/CartContext'; 

const ProductItem = ({ product }) => {
    const [count, setCount] = useState(1);
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
    };

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                    <strong>Price:</strong> ${product.price}
                </Card.Text>
                <ProductItemCount
                    count={count}
                    onAdd={() => onAdd(product.stock)}
                    onRemove={() => onRemove(product.stock)}
                />
                <Button
                    variant="primary"
                    className="add-to-cart"
                    onClick={addToCartHandler}>
                    Add to cart
                </Button>
                <div>
                    <Link
                        className="check-product-details"
                        to={`/product/${product.id}`}
                    >
                        Check for details
                    </Link>
                </div>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    Current stock: {product.stock}
                </small>
            </Card.Footer>
        </Card>
    );
};

export default ProductItem;
