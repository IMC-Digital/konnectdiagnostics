import React from 'react'
import { Accordion, Card, Image, ListGroup } from 'react-bootstrap'

export default function ActiveOrderCard1() {
  return (
    <div>
      <Card className='w-100'>
        <Card.Header className='d-flex-cb'>
            <div className='d-flex-cc'>
              <Image src='/images/k.png' alt="konnect-logo" className='me-2' style={{ width: "17px", height: "15px" }} />  
              <h2 className="text-k-accent mb-0 me-2">  #KDO085</h2>
              <p className="text-k-text small text-k-clr-secondary mb-0"> 24 Jan, Wed </p>
            </div>

            <div className='d-flex-cc'>
              <p  className='mb-0'> <strong> Order Sample Status: </strong> Order Placed </p>
            </div>
        </Card.Header>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <Image src='/images/k.png' alt="konnect-logo" className='me-2' style={{ width: "17px", height: "15px" }} />
            <h2 className='text-k-accent mb-0'>Card Title</h2>
          </div>
          <Card.Text className='d-flex-cb'>
            <p className="text-k-text text-light-dark mb-0">
              Self / Shaik Mahmood Sameer
            </p>
            <p className="text-k-text text-light-dark mb-0">
              <i className="fa-regular fa-clock small pe-1"></i>
              05 Jan, Thu
            </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p className="small text-light-dark mb-0">
              <i className="fa-solid fa-vial me-2"></i>
              <strong> Home Sample Collection </strong>
              <br />
              1-7-182/93, Risala gadda, Musheerabad, Hyderabad Hyderabad Telangana - 500020
            </p>
            <p className="small text-light-dark mb-0">
              <i className="fa-solid fa-phone me-2"></i> 9394852565
            </p>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='p-0 order-price-accordian'> Order Item Billing Details </Accordion.Header>
                <Accordion.Body>
                  <div className='d-flex-cb'>
                    <p className="text-k-text mb-0">Item Price</p>
                    <p className="text-k-text mb-0"> &#8377; 2500 /- </p>
                  </div>
                  <div className='d-flex-cb'>
                    <p className="text-k-text mb-0">Discount Amount</p>
                    <p className="text-k-text text-danger mb-0"> - &#8377; 1250 /- </p>
                  </div>
                  <hr />
                  <div className='d-flex-cb'>
                    <p className="text-k-text fw-bold">Total</p>
                    <p className="text-k-text fw-bold"> &#8377; 1250 /- </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
