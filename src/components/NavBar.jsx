import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>SummerStore</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/men">Hombre</Nav.Link>
                <Nav.Link href="/women">Mujer</Nav.Link>
                <Nav.Link href="/shoes">Calzado</Nav.Link>
                <Nav.Link href="/accessories">Accesorios</Nav.Link>
            </Nav>
        </Navbar>        
    );
} 

export default NavBar;