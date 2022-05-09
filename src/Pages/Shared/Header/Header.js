import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo.svg';

const Header = () => {
    const [user]=useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container className='d-flex align-items-center'>
                        <Navbar.Brand as={Link} to="/">
                        <img src={logo} height="30px" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Blog">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
                                {/* <Nav.Link as={Link} to="/AddItem">Add Item</Nav.Link> */}
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                                {
                                    user &&
                                    <>
                                    <Nav.Link as={Link} to="/AddItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/ManageCar">Manage Item</Nav.Link>
                                    </>

                                }
                                {
                                    user? 
                                    <button className='btn btn-danger' onClick={handleSignOut}>LOGOUT</button>:
                                    <Nav.Link eventKey={2} as={Link} to="/Login">
                                    Login
                                </Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;