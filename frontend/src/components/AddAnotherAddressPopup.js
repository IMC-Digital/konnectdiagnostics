import React from 'react';
import { styled } from "styled-components";
import AddOtherAddressForm from './AddOtherAddressForm';
import { Modal } from 'react-bootstrap';

export default function AddAnotherAddressPopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='p-0'>
        <Wrapper className="overflow-hidden row">
          <div className="col-md-6 p-4">
            <h3 className="text_secondary">Add New Address</h3>
            <hr />
            <div className="d-flex">
              <AddOtherAddressForm userId={props.userId} />
            </div>
          </div>
          <div className="col-md-6 p-0">
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
