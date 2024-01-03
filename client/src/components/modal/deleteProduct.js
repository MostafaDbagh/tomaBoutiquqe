import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Delete from '../../assests/images/delete.png'
import { getProductById } from '../../api/productApi';
import { ToastContainer,toast } from 'react-toastify';
import { deleteProductById } from '../../api/productApi';
import ConfirmDeleteAction from './confirmDelete';
const DeleteProductModal = ({ showProductsModal,productId, setShowPorductsModal:handleClose,productName }) => {

  const [showConfirmModal,setShowConfirmModal] = useState(false)

    

const handleDelete = async(id) =>{
     const res = await deleteProductById(id);
    handleClose(false);
    setShowConfirmModal(true)
    
}


    const reduceProductNumber = (product) =>{
      toast.error('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }

  return (
    <>
          <ToastContainer/>

    <Modal show={showProductsModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
            <div>Confirm Delete Product  <span>{productName}</span></div>
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
Are you Sure you Want to Delete Product {productName} with ID Number {productId}


      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={()=>handleDelete(productId)}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={()=>handleClose(false)}>
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
    <ConfirmDeleteAction showConfirmModal={showConfirmModal}setShwoConfrimModal={setShowConfirmModal}/>
    </>
  );
};

export default DeleteProductModal;
