import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail"
import productsMock from "../../data/products.json";

const ProductDetailContainer = () => {

    const [product, setProduct] = useState();

    const getFirstProductFromDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsMock[0])
        }, 2000);
    });

    useEffect(() => {
        getFirstProductFromDB.then(product => {
            console.log(product);
            setProduct(product);
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