import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail"
import { useParams } from "react-router-dom";
import { getFireStore } from '../../db';

const ProductDetailContainer = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState();

    
    useEffect(() => {
        const db = getFireStore(); 
        db.collection('products').doc(productId).get()
        .then(result => {
            if(result.exists) {
                const product = { 'id' : result.id, ...result.data() };
                setProduct(product);
            }
        })
        .catch(e => console.log(e));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {product ? <ProductDetail product={product} /> : <p>Product not found.</p>}
        </div>
    );
};

export default ProductDetailContainer;