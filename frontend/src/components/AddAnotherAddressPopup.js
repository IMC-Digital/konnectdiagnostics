import React from 'react';
import AddOtherAddressForm from './AddOtherAddressForm';
import { Modal } from 'react-bootstrap';

export default function AddAnotherAddressPopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='p-0'>
        <AddOtherAddressForm />
      </Modal.Body>
    </Modal>
  )
}
