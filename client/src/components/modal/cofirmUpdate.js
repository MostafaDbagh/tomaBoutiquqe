import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ConfirmUpdateAction = ({ showConfirmModal, setShwoConfrimModal:handleClose}) => {
  return (
    <>
    <Modal show={showConfirmModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
      {`confirmation for Update Action`}
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
{` Update Action that's you performed getting successfully`}
      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary"onClick={()=>handleClose(false)}  >
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ConfirmUpdateAction;
