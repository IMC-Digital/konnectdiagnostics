import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { removeFromCart } from '../utils/cartUtils';

function CartItemsList({ item, setCart }) {

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCartItems = removeFromCart(
      itemToRemove,
      "selectedCartItems",
      `${itemToRemove.type === "test" ? itemToRemove.test_name : itemToRemove.package_name} removed from cart`
    );
    setCart(updatedCartItems);
    toast.error(`${itemToRemove.type === "test" ? itemToRemove.test_name : itemToRemove.package_name} removed from cart`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "red-toast",
    });
  };

  // const handleRemoveFromCart = (itemToRemove) => {
  //   if (itemToRemove.type === "test") {
  //     const prevCartItems =
  //       JSON.parse(localStorage.getItem("selectedCartItems")) || [];
  //     console.log("prevCartItems:", prevCartItems);
  //     const indexToRemove = prevCartItems.findIndex(
  //       (item) => item.test_id === itemToRemove.test_id
  //     );
  //     const updatedCartItems = [
  //       ...prevCartItems.slice(0, indexToRemove),
  //       ...prevCartItems.slice(indexToRemove + 1),
  //     ];
  //     localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
  //     setCart(updatedCartItems);

  //     toast.error(`${item.test_name} removed from cart`, {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       className: "red-toast",
  //     });
  //   } else if (itemToRemove.type === "package") {
  //     const prevCartItems =
  //       JSON.parse(localStorage.getItem("selectedCartItems")) || [];
  //     console.log("prevCartItems:", prevCartItems);
  //     const indexToRemove = prevCartItems.findIndex(
  //       (item) => item.package_id === itemToRemove.package_id
  //     );
  //     const updatedCartItems = [
  //       ...prevCartItems.slice(0, indexToRemove),
  //       ...prevCartItems.slice(indexToRemove + 1),
  //     ];
  //     localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
  //     setCart(updatedCartItems);

  //     toast.error(`${item.package_name} removed from cart`, {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       className: "red-toast",
  //     });
  //   }
  // };

  return (
    <div className={`${item.type} d-flex bd-highlight border-bottom py-3`}>
      <div className='w-100 bd-highlight d-flex justify-content-between' style={{ flex: "2" }}>
        <div className='w-100 d-flex justify-content-between align-items-between'>
          <div className='d-flex-cc'>
            <h2 className='text-k-accent text-k-clr-primary mb-0'> 
              {item.type === "test" ? item.test_name : item.package_name} 
              <span className="small text-ligt fw-normal text-capitalize"> - {item.type} </span>
            </h2>
          </div>
          <div className='d-flex align-items-center'>
            <h4 className="text-k-text me-2 mb-0"> <small>&#8377; </small> {item.price} </h4>
            <button className='btn border btn-sm cursor-pointer' onClick={() => handleRemoveFromCart(item)}>
              <i className="fa-regular fa-trash-can text-danger"></i>
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}


export default CartItemsList
