import React from 'react';

export default function SelectClinicGrid({ item, setSelectedClinic }) {
  return (
    <div
      className='p-1 ms-3'
      style={{ borderRadius: "5px" }}
      onClick={() => setSelectedClinic(item)}
    >
      <div className="top">
        <div className='py-2'>
          <div className='mb-2 d-flex align-items-center'>
            <img src="/images/k.png" className="me-2" style={{ width: "20px", height: "17px" }} alt="" />
            <h3 className='text-k-accent text-k-clr-secondary mb-0'>
              <span className='text-k-accent'>
                {item.area}
              </span> - {item.pincode}
            </h3>
          </div>
          <p className='mb-0'>{item.address}</p>
          <div className="d-flex gap-4">
            <p className='mb-0'> <i className="fa-solid fa-mobile-screen text-muted me-2"></i> {item.telephone_number}</p>
            <p className='mb-0'> <i className="fa-regular fa-envelope text-muted me-2"></i> {item.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
