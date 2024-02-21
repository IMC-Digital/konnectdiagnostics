import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function SelectClinicGrid({ item, setSelectedClinic }) {
  return (
    <div className='rounded' onClick={() => { setSelectedClinic(item); console.log(item) }}>

          <div className='d-flex align-items-center'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className='mb-0 text-k-accent'>
                    <span> {item.area} </span> -
                    <span className='text-k-clr-secondary'> {item.pincode} </span>
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className='mb-0'>{item.address}</p>
                  <div className="d-flex gap-4">
                    <p className='mb-0 small'> <strong> Contact: </strong> {item.telephone_number}, {item.email} </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
      </div>
    </div>
  )
}
