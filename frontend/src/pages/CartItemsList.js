import React from 'react';

function CartItemsList({item, setCart}) {
  const handleRemoveFromCart = () => {
    const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    const indexToRemove = prevCartItems.findIndex(cartItem => cartItem.product_id === item.product_id);
    const updatedCartItems = [...prevCartItems.slice(0, indexToRemove), ...prevCartItems.slice(indexToRemove + 1)];
    localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);
  };

  return (
    <div className={item.product_type + " d-flex bd-highlight border-bottom py-3"}>
        <div className='w-100 bd-highlight d-flex justify-content-between' Style={{flex: "2"}}>
          <div className='w-100 d-flex justify-content-between align-items-between'>
            <div>
              <h6 className='text-k-accent text-k-clr-primary mb-0'> {item.product_name} </h6> 
              <p className="mb-1 small"> <b> Test Report Delivery: </b> {item.test_report_delivery} </p>
            </div>
            <div className='d-flex align-items-center'>
              <h4 className="text-k-text me-2 mb-0"> <small>Rs: </small> {item.price} </h4>
              <button className='btn border btn-sm cursor-pointer'  onClick={() => {handleRemoveFromCart()}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItemsList
