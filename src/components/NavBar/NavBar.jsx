import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css';
import categories from '../../data/categories.json';

const NavBar = () => {

    const categoryLinks = categories.map((category, index) => 
        <Link className="nav-link link" key={index} to={category.link}>{category.text}</Link>
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="brand">SummerStore</Link></Navbar.Brand>
            <Nav className="mr-auto">
                {categoryLinks}
            </Nav>
            <CartWidget />
        </Navbar>
    );
} 

export default NavBar;