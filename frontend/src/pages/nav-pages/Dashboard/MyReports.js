import axios from 'axios';
import React from 'react'
import { Image } from 'react-bootstrap';

function MyReports({ userId, allOrdersData, navigateToOrderDetails }) {
  const deliveredOrders = allOrdersData.filter(order => order.order_status === "delivered");

  const handleKnowMoreClick = (orderItem) => {
    navigateToOrderDetails(orderItem.order_id);
  }

  const downloadPDF = async () => {
    try {
      const response = await axios.get('/download-pdf', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'downloaded-file.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div>
      <h2 className='text-k-secondary'> My Reports </h2>
      <hr />
      {deliveredOrders.length > 0 ? (
        deliveredOrders.map((orderItem, index) => (
          <div className='rounded my-3 overflow-hidden w-100'>
            {orderItem.order_items.map((productItems, index) => (
              <div className='w-100 bg-k-light rounded my-2'>
                <div className="d-flex-cb p-2">
                  <div className='d-flex align-items-start'>
                    <div className='bg-white d-flex-cc p-2 rounded' style={{ width: "35px", height: "35px" }} >
                      <Image src={"/images/organs/" + productItems.order_item_details[0].category + ".png"} rounded style={{ width: "25px", height: "25px" }} />
                    </div>
                    <div className='ms-2'>
                      <h2 className="mb-0 text-k-text">
                        <span className="text-k-accent text-k-clr-primary fw-bold"> {productItems.order_item_details[0].test_name} </span>
                        <span className=""> - {productItems.member_name} </span>
                      </h2>
                      <p className="mb-0 small text-success"> Report Available </p>
                    </div>
                  </div>

                  <div className="d-flex-cb">
                    <div className="d-flex-cc cursor-pointer" onClick={() => { handleKnowMoreClick(orderItem) }}>
                      <h2
                        className="order-id text-k-accent mb-0 px-3 py-2 bg-white shadow-md text-k-clr-primary me-2 d-flex-cc"
                        style={{ borderRadius: "50px" }}>
                        <span>Order Id:</span> {" "}
                        <span className='text-k-clr-secondary fw-bold'> #ORKDC{orderItem.order_id} </span> {" "}
                        <span>
                          <lord-icon
                            src="https://cdn.lordicon.com/yxczfiyc.json"
                            trigger="hover"
                            colors="primary:#30c9e8"
                            style={{ width: "20px", height: "20px" }}>
                          </lord-icon>
                        </span>
                      </h2>
                    </div>

                    <div className="vr mx-2"></div>

                    <button 
                      className='btn btn-outline-success d-flex-cc p-2 rounded' 
                      style={{ width: "35px", height: "35px" }} 
                      onClick={downloadPDF}
                      >
                      <i class="fa-solid fa-download clr-inherit"></i>
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No Reports Available</p>
      )}
    </div>
  )
}

export default MyReports