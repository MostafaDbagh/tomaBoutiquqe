import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import Delete from '../../assests/images/delete.png'
import { getProductById } from '../../api/productApi';
import { ToastContainer,toast } from 'react-toastify';

const ViewProductModal = ({ showProductsModal,productId, setShowPorductsModal:handleClose }) => {

const [currentProduct,setCurrentProduct] = useState({})
    

const fetchProductById = async(id) =>{
    const res = await getProductById(id);
    setCurrentProduct({...res.data})
}

useEffect(()=>{
fetchProductById(productId)
},[productId])
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
            <div>More Details About <span>{currentProduct.product_name}</span></div>
            <div>Product ID :<span>{currentProduct.product_id}</span></div>
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
{currentProduct.product_description}

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>handleClose(false)}>
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ViewProductModal;
