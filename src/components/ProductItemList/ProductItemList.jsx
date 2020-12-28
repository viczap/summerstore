import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import CardDeck from 'react-bootstrap/CardDeck'
import ProductItem from './../ProductItem/ProductItem'; 
import './ProductItemList.css';

import productsMock from '../../data/products.json';
import { useParams } from 'react-router-dom';

const ProductItemList = () => {

    const {categoryId} = useParams();

    const [products, setProducts] = useState([]);

    const getProductsFromDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsMock)
        }, 500);
    });

    useEffect(() => {
        getProductsFromDB.then(result => {
            let products = result;
            if(categoryId) {
                products = products.filter(
                    product => product.categories.includes(categoryId.toUpperCase()))
            }
            setProducts(products);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);


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