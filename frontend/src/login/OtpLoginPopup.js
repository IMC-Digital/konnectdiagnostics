import Modal from 'react-bootstrap/Modal';
import OtpLoginWrapper from './OtpLoginWrapper';

export default function OtpLoginPopup(props) {

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='d-flex-cc'>
        <OtpLoginWrapper /> 
      </Modal.Body>
    </Modal>
  )
}