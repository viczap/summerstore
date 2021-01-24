import './ProductItemCount.css';

const ProductItemCount = ({count, onAdd, onRemove, otherStyles}) => {
    return (
        <div className={`product-item-count ${otherStyles}`}>
            <button onClick={onRemove} disabled={count > 1 ? false : true}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default ProductItemCount;