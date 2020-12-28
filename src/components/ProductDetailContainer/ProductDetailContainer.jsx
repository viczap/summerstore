import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail"
import productsMock from "../../data/products.json";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {

    const {productId} = useParams();

    const [product, setProduct] = useState();

    const getProductsFromDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsMock)
        }, 500);
    });

    useEffect(() => {
        getProductsFromDB.then(products => {
            setProduct(products.find(product => product.id === parseInt(productId)));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {product && <ProductDetail product={product} />}
        </div>
    );
};

export default ProductDetailContainer;