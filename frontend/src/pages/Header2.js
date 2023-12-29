import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MiniCart from '../components/cart/MiniCart';
import { User } from './nav-pages/User';
import NavMenu2 from './nav-pages/NavMenu2';

function Header2({ cart, setCart, auth, setAuth, userId, setUserId, userName, setUserName, cartId, setCartId, message, handleLoginClick, setShowOtpPopup2, handleLogout }) {
    return (
        <>
            <Navbar expand="xl" className="bg-body-tertiary sticky-top w-100 px-2" style={{ zIndex: "100" }}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src="/images/konnect-logo.png" alt="Konect-Logo" style={{ width: "150px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-xl`} aria-labelledby={`offcanvasNavbarLabel-expand-xl`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                <img src="/images/konnect-logo.png" alt="Konect-Logo" style={{ width: "150px" }} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavMenu2 />

                            <div className="d-flex align-items-center justify-content-center me-2">
                                {!auth ?
                                    <Button variant="primary" className='btn btn-secondary' onClick={() => setShowOtpPopup2(true)}>
                                      Sigin / Signup <i className="ms-2 fa-solid fa-right-to-bracket text-white"></i>
                                    </Button> :
                                    <User auth={auth} setAuth={setAuth} userId={userId} setUserId={setUserId} userName={userName} setUserName={setUserName} setCartId={setCartId} message={message} handleLoginClick={handleLoginClick} handleLogout={handleLogout} />
                                }
                            </div>
                            
                            <DropdownButton 
                                align='end' 
                                id="dropdown-menu-align-responsive-1"
                                title={
                                    <Button variant="primary" className='btn btn-primary'>
                                      <i className="fa-solid fa-cart-plus me-2 text-white"></i>
                                      <span className="item-count text-white">{cart.length}</span>
                                    </Button>
                                } 
                                className='btn-sm p-0'
                            >
                                <Dropdown.Item eventKey="1" className='p-0'> <MiniCart cart={cart} setCart={setCart} /> </Dropdown.Item>
                            </DropdownButton>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header2;