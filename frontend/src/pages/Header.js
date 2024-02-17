import React from "react";
import { styled } from "styled-components";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MiniCart from "../components/cart/MiniCart";
import { User } from "./nav-pages/User";
import NavMenu from "./nav-pages/NavMenu";

function Header({
  cart,
  setCart,
  auth,
  setAuth,
  userId,
  setUserId,
  userName,
  setUserName,
  cartId,
  setCartId,
  message,
  handleLoginClick,
  setShowOtpPopup,
  handleLogout,
}) {
  return (
    <Wrapper>
      <Navbar
        expand="xl"
        className="bg-body-tertiary bg-light w-100"
        style={{ zIndex: "100", position: "-webkit-sticky", top: "0" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/images/konnect-logo.png"
              alt="Konect-Logo"
              style={{ width: "150px" }}
            />
          </Navbar.Brand>

          <div>
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center justify-content-center me-2">
                {!auth ? (
                  <Button
                    variant="primary"
                    className="btn l-r-btn btn-k-primary"
                    onClick={() => setShowOtpPopup(true)}
                  >
                    Login / Register{" "}
                    <i className="ms-2 fa-solid fa-right-to-bracket text-white"></i>
                  </Button>
                ) : (
                  <User
                    auth={auth}
                    setAuth={setAuth}
                    userId={userId}
                    setUserId={setUserId}
                    userName={userName}
                    setUserName={setUserName}
                    setCartId={setCartId}
                    message={message}
                    handleLoginClick={handleLoginClick}
                    handleLogout={handleLogout}
                  />
                )}
              </div>

              <DropdownButton
                align="end"
                id="dropdown-menu-align-responsive-1"
                className="btn-sm p-0 pb-0 mb-0 d-flex"
                title={
                  <div variant="primary" className="btn align-self-center btn-k-primary btn-sm">
                    <i className="fa-solid fa-cart-plus me-2 text-white"></i>
                    <span className="item-count text-white">{cart.length}</span>
                  </div>
                }
              >
                <Dropdown.Item eventKey="0" className="p-0">
                  <MiniCart cart={cart} setCart={setCart} />
                </Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="d-flex justify-content-end">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-xl`}
                aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                    <img
                      src="/images/konnect-logo.png"
                      alt="Konect-Logo"
                      style={{ width: "150px" }}
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <NavMenu />
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </div>

        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.section`
  .l-r-btn {
    background-color: var(--primary-color);
    border: none;
    &:hover {
      background-color: var(--secondary-color);
    }
  }

  ${'' /* mini cart */}
  .mini-cart-wrapper{
    width: 350px;
    height: 350px;
    overflow-y: scroll;
    background-color: white;
}
.mini-cart-wrapper::-webkit-scrollbar {
    width: 5px;
    box-shadow: inset 0 0 7px #11010125;
    border-radius: 10px;
  }
  .mini-cart-wrapper::-webkit-scrollbar-thumb {
    background: linear-gradient(220deg, #005bab, #00ffbb90);
    border-radius: 10px;
    cursor: pointer;
}

#dropdown-menu-align-responsive-1, #dropdown-menu-align-responsive-2{
    padding: 0;
}
#dropdown-menu-align-responsive-1::after, #dropdown-menu-align-responsive-2::after{
    position: absolute;
    opacity: 0;
}
.mini-cart-wrapper ul{
    list-style-type: none;
}
`;
