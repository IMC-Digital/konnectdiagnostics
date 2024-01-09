import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./pages/Header";
import Header2 from "./pages/Header2";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import About from "./pages/nav-pages/About";
import Cart from "./pages/nav-pages/Cart";
import HomeCollection from "./pages/nav-pages/HomeCollection";
import Services from "./pages/nav-pages/Services";
import Details from "./components/services/Details";
import RsDetails from "./components/services/RsDetails";
import SingleProduct from "./components/requiredPages/SingleProduct";
import Packages from "./pages/nav-pages/Packages";
import LocateClinic from "./pages/nav-pages/LocateClinic";
import Tests from "./pages/nav-pages/Tests";
import HealthConditions from "./pages/nav-pages/HealthConditions ";
import RadiologyServices from "./pages/nav-pages/RadiologyServices";
import TesgingPage from "./TesgingPage";
import PartnerWithUs from "./pages/nav-pages/PartnerWithUs";
import FetalMedicineUnit from "./pages/nav-pages/FetalMedicineUnit";
import ErrorPage from "./pages/ErrorPage";

import { Account } from "./login/Account";
import { Register } from "./login/Register";

import Profile from "./login/Profile";
import axios from "axios";
import LogPopup from "./login/LogPopup";
import HealthPackages from "./pages/nav-pages/HealthPackages";
import ProfileUpdate from "./login/ProfileUpdate";
import Dashboard from "./pages/nav-pages/Dashboard/Dashboard";
import ContactUs from "./pages/ContactUs";
import { BASE_API_URL } from "./api";
import OtpLoginPopup2 from "./login/OtpLoginPopup2";
import OtpLoginPage from "./login/OtpLoginPage";
import AddAnotherAddressPopup from "./components/AddAnotherAddressPopup";
import CheckoutProceed from "./pages/nav-pages/CheckoutProceed";
import AddNewMemberPopup from "./components/AddNewMemberPopup";
import PopupConfirmCheckout from "./components/PopupConfirmCheckout";

const theme = {
  colors: {
    primary: "#005BAB",
    addon: "#00ffbb",
    pink: "#d12e88",
    primary90: "#00aeef90",
    secondary: "#00aeef",
    white: "#fff",
    dark: "#000F1C",
    text: "#0b141c",
    bg_light: "#f8f8f9",
  },
  fonts: {
    heading1: "2rem",
    heading2: "1.75rem",
    heading3: "1.25rem",
    heading4: "1.125rem",
    text: "1rem",
  },
};

function App() {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState('');
  const [cartId, setCartId] = useState('');
  const [cart, setCart] = useState([]);
  const [localCartItems, setLocalCartItems] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [showProfileForm, setShowProfileForm] = useState(false);
  axios.defaults.withCredentials = true;
  const [showOtpPopup2, setShowOtpPopup2] = React.useState(false);
  const [showAddNewAddressPopup, setShowAddNewAddressPopup] = useState(false)
  const [showAddNewMemberPopup, setShowAddNewMemberPopup] = useState(false)
  const [showPopupConfirmCheckout, setShowPopupConfirmCheckout] = useState(false)
  const [checkOutFormData, setCheckOutFormData] = useState({
    userId: 36,
    amount: {
      subTotalAmount: 0,
      couponCode: "",
      couponCodeDiscount: 0,
      totalAmount: 0,
    },
    sampleCollection: {
      sampleCollectionAt: 0,
      homeSampleCollection: {
        address_id: 0,
        address_line_1: "",
        address_line_2: "",
        address_name: "",
        address_type: "",
        city: "",
        googlemap: "",
        locality: "",
        pincode: "",
        state:"",
        alternate_mobile_number: ""
      },
      clinicSampleCollection: {
        id: 0,
        name: "",
        address: "",
        area: "",
        city: "",
        code: "",
        pincode: "",
        google_map_link: "",
        telephone_number: "",
        email: ""
      }
    },
    selectedMember: [],
    selectedSession: {
      date: {
        date: "",
        month: "",
        day: ""
      },
      time: "18:00-19:00"
    }
  })

  useEffect(() => {
    axios.get(`${BASE_API_URL}/user`).then((res) => {
        if (res.data.Status === "ok") {
          setAuth(true);
          setUserId(res.data.userid);
          setCartId(res.data.cart_id);
        } else {
          setAuth(false);
        }
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, [auth, userId, cartId]);

  useEffect(() => {
  const storedCartItems = JSON.parse(
    localStorage.getItem("selectedCartItems")
  );
  const initialCart = storedCartItems || [];

  // Update quantity property to 1 for each item in the cart
  const updatedCart = initialCart.map(item => ({ ...item, quantity: 1 }));

  setCart(updatedCart);

  if (!storedCartItems) {
    // If there were no stored cart items, initialize the local storage with an empty array
    localStorage.setItem("selectedCartItems", JSON.stringify([]));
  }
}, [auth]);

  
  useEffect(() => {
    const fetchData = async () => {
      if (auth) {
        const profileResponse = await axios.get(`${BASE_API_URL}/profile/${userId}`);
        const data = profileResponse.data;
        if (data.profileExists) {
          setProfileData(data.profileData);
        } else {
          setShowProfileForm(true);
        }
      }
    };
    fetchData();
  }, [userId, auth, profileData]);

  const handleLogout = () => {
    axios.get(`${BASE_API_URL}/logout`).then(() => {
      setAuth(false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  // ------------------------------------------------
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  // ------------------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Header2 
            cart={cart} 
            setCart={setCart} 
            auth={auth}  
            setAuth={setAuth} 
            userId={userId}  
            setUserId={setUserId}  
            userName={profileData.fullname} 
            cartId={cartId}  
            setCartId={setCartId}
            handleLoginClick={handleLoginClick}
            setShowOtpPopup2={setShowOtpPopup2}
            handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={
              <Home 
                localCartItems={localCartItems} 
                setLocalCartItems={setLocalCartItems} 
                userId={userId} 
                auth={auth} 
                cart={cart} 
                setCart={setCart} 
                handleLoginClick={handleLoginClick} 
              />} />
            <Route exact path="/profile" element={
              auth ?
                ( <Profile userId={userId} auth={auth} profileData={profileData} setProfileData={setProfileData} showProfileForm={showProfileForm} setShowProfileForm={setShowProfileForm} /> )
                : ( <Navigate to="/login" /> )
              } />
            <Route exact path="/edit-profile" element={ 
              auth ? 
                ( <ProfileUpdate userId={userId} auth={auth} profileData={profileData} setProfileData={setProfileData} /> ) 
                : ( <Navigate to="/login" /> )
              } />
            <Route exact path="/dashboard" element={
              auth ? 
                ( <Dashboard userId={userId} auth={auth} userName={profileData.fullname} profileData={profileData} setProfileData={setProfileData} /> )
                : ( <Navigate to="/login" /> )              
              } />
            <Route path="/tests" element={
              <Tests 
                userId={userId} 
                auth={auth} 
                cart={cart} 
                setCart={setCart} 
                handleLoginClick={handleLoginClick} 
                />} />
            <Route path="/health-packages" element={
              <HealthPackages 
                userId={userId} 
                auth={auth} 
                cart={cart} 
                setCart={setCart} 
                handleLoginClick={handleLoginClick} 
              />} />
            {/* <Route path="/cart" element={
              auth ? (<Cart 
                userId={userId} 
                cart={cart} 
                setCart={setCart}
                setShowAddNewAddressPopup={setShowAddNewAddressPopup}
              />) : ( 
                 <Navigate to="/login" /> 
            )} /> */}
            <Route path="/cart" element={
              auth ? (
                <Cart 
                  userId={userId} 
                  cart={cart} 
                  setCart={setCart}
                  checkOutFormData={checkOutFormData}
                  setCheckOutFormData={setCheckOutFormData}
                />) : ( 
                 <Navigate to="/login" /> 
                )
              } 
              />
            {/* <Route path="/cart" element={ <Cart userId={userId} cart={cart} setCart={setCart} /> } /> */}
            <Route path="/checkout" element={ 
              <CheckoutProceed 
                userId={userId} 
                cart={cart} 
                setCart={setCart}
                setShowAddNewAddressPopup={setShowAddNewAddressPopup}
                setShowAddNewMemberPopup={setShowAddNewMemberPopup}
                setShowPopupConfirmCheckout={setShowPopupConfirmCheckout}
                profileData={profileData}
                checkOutFormData={checkOutFormData}
                setCheckOutFormData={setCheckOutFormData}
              /> } />
            {/* <Route path="/checkout" element={
              auth ? (
                <CheckoutProceed 
                  userId={userId}
                  cart={cart}
                  setCart={setCart}
                  setShowAddNewAddressPopup={setShowAddNewAddressPopup}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
            /> */}

            <Route path="/packages" element={
              <Packages 
                auth={auth} 
                userId={userId} 
                cart={cart} 
                setCart={setCart} 
                handleLoginClick={handleLoginClick} 
                />} />
            <Route exact path="/account" element={
              auth ? ( <Account /> ) : ( <Navigate to="/login" /> )
            } />
            <Route exact path="/login" element={<OtpLoginPage />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/home-collection" element={<HomeCollection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/health-conditions" element={<HealthConditions />} />
            <Route path="/health-conditions/:slug" element={<Details />} />
            <Route path="/radiology-services" element={<RadiologyServices />} />
            <Route path="/radiology-services/:slug" element={<RsDetails />} />
            <Route path="/nearest-centers" element={<LocateClinic />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/fetal-medicine-unit" element={<FetalMedicineUnit />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/testing-page" element={<TesgingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <LogPopup isShowLogin={isShowLogin} handleLoginClick={handleLoginClick} />
          <OtpLoginPopup2 show={showOtpPopup2} onHide={() => setShowOtpPopup2(false)} />
          <AddAnotherAddressPopup userId={userId} show={showAddNewAddressPopup} onHide={() => setShowAddNewAddressPopup(false)} />
          <AddNewMemberPopup userId={userId} show={showAddNewMemberPopup} onHide={() => setShowAddNewMemberPopup(false)} />
          <PopupConfirmCheckout 
            userId={userId} 
            cart={cart}
            show={showPopupConfirmCheckout} 
            onHide={() => setShowPopupConfirmCheckout(false)} 
            checkOutFormData={checkOutFormData}
            setCheckOutFormData={setCheckOutFormData}
          />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
