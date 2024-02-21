import React from 'react';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MiniCart({ cart, setCart }) {
  return (
    <div className='mini-cart-wrapper'>
      <h5 className='p-3 bg-light text-k-accent'>Tests Cart</h5>
      <ul className='px-3'>
        {cart.map((item, index) => (
          <MiniCartItem key={index} item={item} setCart={setCart} />
        ))}
        <NavLink to='/cart'>
          <div className='btn btn-k-primary btn-primary w-100 text-center mt-3'> Proceed to Cart </div>
        </NavLink>
      </ul>

      <ToastContainer />
    </div>
  )
}

const MiniCartItem = ({ item, setCart }) => {

  const handleRemoveFromCart = (itemToRemove) => {
    if (itemToRemove.type === "test") {
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      console.log("prevCartItems:", prevCartItems);
      const indexToRemove = prevCartItems.findIndex(
        (item) => item.test_id === itemToRemove.test_id
      );
      const updatedCartItems = [
        ...prevCartItems.slice(0, indexToRemove),
        ...prevCartItems.slice(indexToRemove + 1),
      ];
      localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
      setCart(updatedCartItems);

      toast.error(`${item.test_name} removed from cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "red-toast",
      });
    } else if (itemToRemove.type === "package") {
      const prevCartItems =
        JSON.parse(localStorage.getItem("selectedCartItems")) || [];
      console.log("prevCartItems:", prevCartItems);
      const indexToRemove = prevCartItems.findIndex(
        (item) => item.package_id === itemToRemove.package_id
      );
      const updatedCartItems = [
        ...prevCartItems.slice(0, indexToRemove),
        ...prevCartItems.slice(indexToRemove + 1),
      ];
      localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
      setCart(updatedCartItems);

      toast.error(`${item.package_name} removed from cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "red-toast",
      });
    }
  };

  return (
    <li className='d-flex justify-content-between align-items-center border-bottom'>
      <div className='pe-2' style={{ width: "90%" }}>
        <h6 className='text-k-text mb-0 small'> {item.type === "test" ? item.test_name.slice(0, 60) : item.package_name} </h6>
        <p className="small fw-bold mb-0"> &#8377; {item.price} </p>
      </div>
      <div className='cursor-pointer' style={{ width: "10%" }}>
        <div className='btn border btn-sm' onClick={() => { handleRemoveFromCart(item) }}>
          <i className="fa-regular fa-trash-can text-danger"></i>
        </div>
      </div>
    </li>
  );
}
