import Button from 'react-bootstrap/Button';
import './ProductItemCount.css';
import { useState } from 'react'

const ProductItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

    const onAdd = () => {
        if(count === parseInt(stock)) {
            console.log('No more stock to add.');
            return;
        }
        setCount(count + 1);
    }

    const onRemove = () => {
        if(count === 0) {
            console.log('Nothing to remove.');
            return;
        }
        setCount(count - 1)
    }

    return (
        <div className="product-item-count">
            <Button variant="outline-info" size="sm" onClick={onRemove}>-</Button>
            <span>{count}</span>
            <Button variant="outline-info" size="sm" onClick={onAdd}>+</Button>
        </div>
    );
};

export default ProductItemCount;