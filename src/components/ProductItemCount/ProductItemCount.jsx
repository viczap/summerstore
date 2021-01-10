import Button from 'react-bootstrap/Button';
import './ProductItemCount.css';

const ProductItemCount = ({count, onAdd, onRemove}) => {
    return (
        <div className="product-item-count">
            <Button variant="outline-info" size="sm" onClick={onRemove} disabled={count > 1 ? false : true}>-</Button>
            <span>{count}</span>
            <Button variant="outline-info" size="sm" onClick={onAdd}>+</Button>
        </div>
    );
};

export default ProductItemCount;