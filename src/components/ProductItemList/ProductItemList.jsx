import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import CardDeck from 'react-bootstrap/CardDeck'
import ProductItem from './../ProductItem/ProductItem'; 
import { useParams } from 'react-router-dom';
import { getFireStore } from '../../db';
import './ProductItemList.css';

const ProductItemList = () => {

    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFireStore();
        
        console.log(categoryId);
        const query = !categoryId ? 
            db.collection('products').get() :
            db.collection('products').where('category', '==', categoryId.toUpperCase()).get()
        
        query.then(result => {
            setProducts(result.docs.map(doc => {
                 return {'id' : doc.id, ...doc.data()};
            }));
        })
        .catch(e => console.log(e));
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