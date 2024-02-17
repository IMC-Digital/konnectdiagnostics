// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CancelOrderPopup({ show, onHide }) {
    return (
      <>
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title> Cancel / Modify order </Modal.Title>
          </Modal.Header>
          <Modal.Body> To modify/cancel the order, please contact our customer care at 040 4123 5555 </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}


