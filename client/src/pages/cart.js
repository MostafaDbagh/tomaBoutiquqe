import React,{useState,useEffect} from "react";
import LocationForm from "../components/forms/addLocationForm";
import { useSelector } from 'react-redux';
import Delete from '../assests/images/delete.png'
import {filterOrder, reduceProduct} from '../redux/reducer/productReducer'
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { getNextOrederId,makeOrder } from "../api/productApi";
import StatusModal from "../components/modal/status";
const Cart = () => {
    const [orderIdState,setOrderIdState] = useState('')
    const [showStatusModal,setShwoStatusModal] = useState(false)
    const [isLocaitonSubmited,setIsLocationSubmited] = useState(false)
    const [disableSendorder,setDisableorder] = useState(false)

    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    const productNumber =() => {
        return product.reduce((acc,curr) => acc + curr.quantity,0)
      }
      const reduceProductNumber = (product) =>{
        dispatch(reduceProduct(product))
        toast.error('you delete item successfully', {
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

      const getNextOrderIdFunc =  async() =>{
        const res = await getNextOrederId();
        setOrderIdState(res.data)
      }
      useEffect(()=>{
        getNextOrderIdFunc()
      },[])

     const getTotalAmout = () =>{
       return product.reduce((acc,curr)=>acc + curr.totalAmount,0)    
     }



      const handleMakeOrder = async () =>{
        setDisableorder(true)
        dispatch(filterOrder())
        const order_totalAmount =getTotalAmout()
        
        let currentDate = new Date();
        let day = currentDate.getDate(); 
        let month = currentDate.getMonth() + 1; 
        let year = currentDate.getFullYear(); 
        let formattedDate = `${month}/${day}/${year}`;

       const order_status ='pending'
       const order_isCompleted =false
       const order_paidAmount ="0"

       const data = {
        order_id:orderIdState+1,
        order_details:product,
        order_date:formattedDate,
        order_totalAmount,
        order_status,
        order_isCompleted,
        order_paidAmount
      
       }
        
        await makeOrder(data).then(res =>{
        if(res.success){
          localStorage.clear();
          setIsLocationSubmited(false)
          setShwoStatusModal(true)
        }
       }).catch(err =>{
        console.log(err)
       })

      }
    return ( 

        <div>
<p className="text-center"style={{fontFamily:'oswald',fontSize:'38px',}}>Checkout </p>
     
        <div className="cart">

     

        <div className="p-3 " style={{width:"100%",position:'relative'}} >
            <p className="text-center my-4" style={{fontFamily:'oswald',fontSize:'34px'}}>Order Summary</p>
    {productNumber() !== 0  && product.map(product =>
  {
    return(
      product.quantity > 0 &&
      <div key={product.productImage} className='d-flex align-items-center justify-content-around my-2  shadow-sm' style={{maxHeight:'100px',fontFamily:'lato',width:"96%"}}>
      <div  style={{background:'#f6f6f6',position:'relative',margin:'16px 0'}}>
     <img src={`http://baby-bucket-product.s3.amazonaws.com/${product['rest'].productImage}`} 
     alt="productImage" 
     width={70} 
     height={70} 
     style={{borderRadius:'50%'}}
     />
     </div>
     <p className='my-0 mx-3  text-center'>{product['rest'].productName}</p>
     <p className='my-0 mx-3 '>{product['rest'].productPrice}</p>
     <p className='my-0 mx-3'>{product.quantity}</p>
     {/* <p className='my-0 mx-3'>{product.totalAmount}</p> */}
     <p className='m-0 ' onClick={()=>reduceProductNumber(product)} >
    <img src={Delete} alt='toma-boutique' width={40} height={40}/>
     </p>
</div>

    )}
)}

        </div>
        <div>
        <LocationForm disableSendorder={disableSendorder} setIsLocationSubmited={setIsLocationSubmited} orderIdState={orderIdState} locationSubmited={isLocaitonSubmited} handleMakeOrder={handleMakeOrder}/>

        </div>

        </div>
        <StatusModal showStatusModal={showStatusModal} setShwoStatusModal={setShwoStatusModal}/>
        </div>
     );
}
 
export default Cart;