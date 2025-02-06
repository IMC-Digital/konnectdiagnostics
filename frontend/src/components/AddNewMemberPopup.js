import React from 'react';
import { Modal } from 'react-bootstrap';
import AddNewMemberForm from './AddNewMemberForm';

export default function AddNewMemberPopup(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='p-0 overflow-hidden rounded'>
        <div className='row'>
            <div className="col-md-6 p-4">
                <AddNewMemberForm userId={props.userId} />
            </div>
            <div className="col-md-6 addNewMemPopupLeftSec">
            </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
