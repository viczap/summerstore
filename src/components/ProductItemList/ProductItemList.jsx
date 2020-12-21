import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import CardDeck from 'react-bootstrap/CardDeck'
import ProductItem from './../ProductItem/ProductItem'; 
import './ProductItemList.css';

import productsMock from '../../data/products.json';

const ProductItemList = () => {

    const [products, setProducts] = useState([]);

    const getProductsFromDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsMock)
        }, 2000);
    });

    useEffect(() => {
        getProductsFromDB.then(result => setProducts(result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const getProductItems = () => {
        return products.map(p => <ProductItem key={p.id} product={p} />)
    }

    return (
        <CardDeck>
            { products.length === 0 ?
                <Spinner animation="border" variant="primary" className="centered" /> :
                getProductItems(products) 
            }
        </CardDeck>
    );
}

export default ProductItemList;