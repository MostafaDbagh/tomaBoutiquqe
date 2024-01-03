import React,{useState,useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';

import { ToastContainer,toast } from 'react-toastify';
import ConfirmDeleteAction from './confirmDelete';
import { updateOrder } from '../../api/productApi';

const UpdateOrder = ({ showProductsModal, setShowPorductsModal:handleClose,orderId }) => {


const orderStatus = [
    {id:1,value:'Pending'},
    {id:2,value:'Confirmed'},
    {id:3,value:'Shipped'}
]    
  const [showConfirmModal,setShowConfirmModal] = useState(false)
  const [allInputs,setAllInputs] =useState(false)
  const [paidInput,setPaidInputs] = useState(false)
  const[statusInput,setStatusInput] = useState(false)

  const [statusText,setStatusText] = useState('')
  const [paidAmountText,setPaidAmountText] = useState('')
  const [notes,setNotes] = useState('')
    
  const handleUpdateOrder = async() =>{
    let params = {}
 let keys =["order_status","order_paidAmount","order_notes"]
 const values = [statusText,paidAmountText,notes]
  for (let i = 0;i<values.length;i++){
         if(values[i] !==''){
            params[keys[i]] = values[i];
         }
  }
 const res = await updateOrder(params,orderId)
  }
  return (
    <>
          <ToastContainer/>

    <Modal show={showProductsModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
            <div>Update Order  </div>
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <h5 className='text-center my-3' style={{fontFamily:'oswald',fontSize:'42'}}>what you want to update:</h5>
            <div className='d-flex justify-content-around  my-2 py-4' style={{margin:'0 auto',fontFamily:'lato',width:'70%',}}>
                <p onClick={()=>{
                    setAllInputs(!allInputs)
                }} className='text-center m-0' style={{width:'23%',height:'42px',lineHeight:'42px',border:'0',boxShadow:' 0 1px 3px 0 rgba(31, 38, 38, 0.37)',  borderRadius: '10px',cursor:'pointer',marginRight:'4px'}}>All</p>
                <p onClick={()=>{
                    setPaidInputs(!paidInput)
                }} className='text-center' style={{width:'33%',height:'42px',lineHeight:'42px',border:'0',boxShadow:' 0 1px 3px 0 rgba(31, 38, 38, 0.37)',  borderRadius: '10px',cursor:'pointer',marginRight:'4px'}}>Paid-Amount</p>
                <p onClick={()=>{
                    setStatusInput(!statusInput)
                }} className='text-center' style={{width:'23%',height:'42px',lineHeight:'42px',border:'0',boxShadow:' 0 1px 3px 0 rgba(31, 38, 38, 0.37)',  borderRadius: '10px',cursor:'pointer'}} >Status</p>
  
            </div>
        </div>
{ (allInputs  || paidInput) && <div className='d-flex justify-content-center align-item-center my-2'>
 <input type='text'
 onChange={(e)=>setPaidAmountText(e.target.value)}
  placeholder='Enter Paid Amount' id='paidAmount' className='addProductInput'  />
</div>

}
{(allInputs  || statusInput) && <div className='d-flex justify-content-center align-item-center my-2'>
    <select className='addProductInput' onChange={(e)=>setStatusText(e.target.value)} style={{border:'0',boxShadow:' 0 1px 3px 0 rgba(31, 38, 38, 0.37)',  borderRadius: '10px'}} >
      <option value="">Select an order</option>
      {orderStatus.map(order => (
        <option key={order.id} >
          {order.value}
        </option>
      ))}
    </select>

</div>

}


<div className='d-flex justify-content-center align-item-center my-2'>
<textarea placeholder='Enter Order Notes..' onChange={(e)=>setNotes(e.target.value)} id='paidAmount' className='addProductInput' style={{border:'0',boxShadow:' 0 1px 3px 0 rgba(31, 38, 38, 0.37)',  borderRadius: '10px'}} />

</div>

      </Modal.Body>
      <Modal.Footer>

        <Button variant="secondary" style={{fontFamily:'lato'}}  onClick={()=>handleClose(false)}>
          Close
        </Button>
        <Button variant="secondary" style={{fontFamily:'lato'}} className='bgPink border-0' onClick={()=>handleUpdateOrder()}>
          Update Product
        </Button>
      </Modal.Footer>
    </Modal>
    <ConfirmDeleteAction showConfirmModal={showConfirmModal}setShwoConfrimModal={setShowConfirmModal}/>
    </>
  );
};

export default UpdateOrder;
