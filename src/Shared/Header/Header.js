import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Hooks/Firebase.init';
import logo from '../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { XIcon, MenuIcon } from '@heroicons/react/solid'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            {/* react boostrap nabar  */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='text-center'>
                            {
                                user ?
                                    <Nav.Link eventKey={2} onClick={handleSignOut} href="">
                                        Sign out
                                    </Nav.Link>

                                    :
                                    <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;