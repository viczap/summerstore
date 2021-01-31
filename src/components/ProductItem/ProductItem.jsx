import Card from "react-bootstrap/Card";
import ProductItemCount from "../ProductItemCount/ProductItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import "./ProductItem.css";

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
        console.log(
            `Adding to the cart: [product=${product.id}, count=${count}]`
        );
        cartContext.addItem(product, count);
    };

    return (
        <Card>
            <Card.Img variant="top" src={`/products/${product.pictureUrl}`} />
            <Card.Body>
                <Link
                    className="card-product-title"
                    to={`/product/${product.id}`}
                >
                    {product.title}
                </Link>
                <Card.Text>{`${product.description.substring(0, 30)}...`}</Card.Text>
                <div className="price">${product.price}</div>
                <ProductItemCount
                    otherStyles="text-centered"
                    count={count}
                    onAdd={() => onAdd(product.stock)}
                    onRemove={() => onRemove(product.stock)}
                />
                <button className="add-to-cart" onClick={addToCartHandler}>
                    Add to cart
                </button>
                <div></div>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
