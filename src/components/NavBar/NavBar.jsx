import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import categories from '../../data/categories.json';
import NavCart from '../NavCart/NavCart';
import WidgetCart from '../WidgetCart/WidgetCart';
import { useState } from 'react';

const NavBar = () => {

    const categoryLinks = categories.map((category, index) => 
        <Link className="nav-link link" key={index} to={category.link}>{category.text}</Link>
    );

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        console.log("showCart: " + showCart);
        setShowCart(!showCart);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/" className="brand">SummerStore</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    {categoryLinks}
                </Nav>
                <NavCart clickHandler={showCartHandler} />
            </Navbar>
            <WidgetCart show={showCart} closeClickHandler={showCartHandler} />
        </>
    );
} 

export default NavBar;