import React from 'react';
import { styled } from "styled-components";
import AddOtherAddressForm from './AddOtherAddressForm';
import { Modal } from 'react-bootstrap';

export default function AddAnotherAddressPopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='p-0'>
        <Wrapper className="overflow-hidden d-flex">
          <div className="p-4 w-50">
            <h3 className="text-k-secondary">Add New Address</h3>
            <hr />
            <div className="d-flex">
              <AddOtherAddressForm userId={props.userId} />
            </div>
          </div>
          <div className="w-50 p-0">
            {/* <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.523434507499!2d78.45764861435773!3d17.426632888084933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98673c27a2bb%3A0xe7e6a045c1095c04!2sPunjagutta%2C%20Hyderabad%2C%20Telangana%20500082!5e0!3m2!1sen!2sin!4v1639045574805!5m2!1sen!2sin"
                            width="100%"
                            height="370"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe> */}
            <div className="w-100 h-100 addNewAddFormSideSection"></div>
          </div>
        </Wrapper>
      </Modal.Body>
    </Modal>
  )
}

const Wrapper = styled.section`
.addNewAddFormSideSection{
    background: url('https://img.freepik.com/free-vector/address-illustration-concept_114360-301.jpg?w=740&t=st=1708005747~exp=1708006347~hmac=ef157b4fb455097160b77cb58a7548b79febbedaea330be954e108a64fc25f76') center;
    background-size: cover;
}
`
