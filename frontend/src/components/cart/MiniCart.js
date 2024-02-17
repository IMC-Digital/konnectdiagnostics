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

// const MiniCartItem = ({item, setCart}) => {
//   const handleRemoveFromCart = () => {
//     const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
//     const indexToRemove = prevCartItems.findIndex(cartItem => cartItem.product_id === item.product_id);
//     const updatedCartItems = [...prevCartItems.slice(0, indexToRemove), ...prevCartItems.slice(indexToRemove + 1)];
//     localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
//     setCart(updatedCartItems);

//     toast.error(`${item.test_name} removed from cart!`, {
//       position: toast.POSITION.BOTTOM_RIGHT,
//       className: 'red-toast'
//     })
//   };

//   return(
//     <li className='d-flex justify-content-between align-items-center border-bottom'>
//         <div className='pe-2' style={{width: "90%"}}>
//             <h6 className='text-k-text mb-0 small'> {item.test_name.slice(0, 60)} </h6>
//             <p className="small fw-bold mb-0"> {item.price} </p>
//         </div>
//         <div className='cursor-pointer' style={{width: "10%"}}>
//             <div className='btn border btn-sm' onClick={() => {handleRemoveFromCart()}}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
//                   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
//                   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
//                 </svg>
//             </div>
//         </div>
//     </li>
//   )
// }

const MiniCartItem = ({ item, setCart }) => {
  const handleRemoveFromCart = () => {
    const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    const indexToRemove = prevCartItems.findIndex(cartItem => cartItem.product_id === item.product_id);
    const updatedCartItems = [...prevCartItems.slice(0, indexToRemove), ...prevCartItems.slice(indexToRemove + 1)];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

    const itemName = item.type === "test" ? item.test_name : item.package_name;

    toast.error(`${itemName} removed from cart!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'red-toast'
    })
  };

  return (
    <li className='d-flex justify-content-between align-items-center border-bottom'>
      <div className='pe-2' style={{ width: "90%" }}>
        <h6 className='text-k-text mb-0 small'> {item.type === "test" ? item.test_name.slice(0, 60) : item.package_name} </h6>
        <p className="small fw-bold mb-0"> &#8377; {item.price} </p>
      </div>
      <div className='cursor-pointer' style={{ width: "10%" }}>
        <div className='btn border btn-sm' onClick={handleRemoveFromCart}>
          <i className="fa-regular fa-trash-can text-danger"></i>
        </div>
      </div>
    </li>
  );
}
