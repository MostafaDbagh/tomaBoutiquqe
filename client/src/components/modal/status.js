import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Success from '../../assests/images/success.svg'
import Imagecarousel from '../slidder/imagecarousel';

const StatusModal = ({ showStatusModal, setShwoStatusModal:handleClose}) => {

    useEffect(()=>{
        setTimeout(() => {
            handleClose(false)
        }, 5000);
    },[showStatusModal])
  return (
    <>
    <Modal show={showStatusModal} onHide={handleClose} style={{borderRadius:'24px'}}>
 
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='my-3'>
        <img src={Success} alt='toma-boutique' />
        </div>
        <p  style={{fontSize:'34px',fontFamily:'oswald',margin:'0 auto 16px',color:'#26ad88'}}>SUCCESS</p>
        <p className='text-center' style={{fontFamily:'lato',fontSize:'20px',color:'#aab3b3',margin:'32px auto 32px'}}>
         we delight to inform you that  Your order submited <span style={{color:'#26ad88',fontWeight:'bold'}}>successfully</span>.
         </p>
         </div>

      </Modal.Body>
      <div>
        <button onClick={()=>handleClose()} style={{width:'100%',height:'66px',background:'#26ad88',padding:'16px 8px',fontFamily:'lato',fontSize:'20px',border:'0',outline:'0'}}>Close</button>
    </div>

    </Modal>
    </>
  );
};

export default StatusModal;
