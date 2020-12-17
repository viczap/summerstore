import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import CardDeck from 'react-bootstrap/CardDeck'
import ProductItem from './../ProductItem/ProductItem'; 
import './ProductItemList.css';

const ProductItemList = () => {

    const [products, setProducts] = useState([]);

    const productsMock = [
        {
            id: 1,
            title: 'Product 1', 
            description : 'Some quick example text to build on the card title...',
            price: 150,
            pictureUrl : "https://via.placeholder.com/100x80.png",
            stock : 3
        },
        {
            id: 2,
            title: 'Product 2', 
            description : 'Some quick example text to build on the card title...',
            price: 200,
            pictureUrl : "https://via.placeholder.com/100x80.png",
            stock : 5
        },
        {
            id: 3,
            title: 'Product 3',
            description : 'Some quick example text to build on the card title...',
            price: 340,
            pictureUrl : "https://via.placeholder.com/100x80.png",
            stock : 10
        },
        {
            id: 4,
            title: 'Product 4',
            description : 'Some quick example text to build on the card title...',
            price: 130,
            pictureUrl : "https://via.placeholder.com/100x80.png",
            stock : 8
        }
    ];

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