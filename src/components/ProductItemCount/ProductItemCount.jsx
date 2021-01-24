import './ProductItemCount.css';

const ProductItemCount = ({count, onAdd, onRemove}) => {
    return (
        <div className="product-item-count">
            <button onClick={onRemove} disabled={count > 1 ? false : true}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default ProductItemCount;