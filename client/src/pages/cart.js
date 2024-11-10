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
        console.error(err)
       })

      }
    return ( 

        <div  style={{paddingTop:'128px'}}>
<p className="text-center"style={{fontFamily:'oswald',fontSize:'38px',}}>Checkout </p>
     
        <div className="cart">

        <div className="" >
        <LocationForm
         disableSendorder={disableSendorder}
          setIsLocationSubmited={setIsLocationSubmited}
           orderIdState={orderIdState}
           locationSubmited={isLocaitonSubmited} 
           handleMakeOrder={handleMakeOrder}/>
        </div>


        <div className="" style={{position:'relative',display:'flex',flexDirection:'column',gap:'16px',justifyContent:'center',alignItems:'center',minWidth:'40%'}} >
     <p className="text-center mb-4" style={{fontFamily:'oswald',fontSize:'34px'}}>Order Summary</p>
    {productNumber() !== 0  && product.map(product =>
  {
    return(
      product.quantity > 0 &&
      <div key={product.productImage} className='d-flex align-items-center justify-content-around my-2  shadow-sm ' style={{maxHeight:'100px',fontFamily:'lato',margin:'0 auto',borderRadius:'24px',minWidth:'100%'}}>
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
<div style={{margin:'0 auto',position:'relative',minWidth:'100%'}}>
<input type="text" className="shadow-sm input" id="cupon" placeholder="Code...." style={{minHeight:'30px',padding:'16px 24px',borderRadius:'24px',fontFamily:'lato',fontSize:'16px',   color: '#212529',outline:'none',
}} ></input>
<button
className="m-0 "
 style={{background:'#000',
 padding:'8px 16px',borderRadius:'24px',position:'absolute',right:'8px',bottom:'8px',fontFamily:'lato'}}
>Apply Cupon</button>
</div>


<div className="shadow" style={{width:'80%',margin:'0 auto auto',position:'relative',borderRadius:'24px',paddingBottom:'16px',minWidth:'100%'}}>
  <div className="px-3 pt-3" style={{fontFamily:'oswald',fontSize:'18px'}}>
    <div style={{marginBottom:'16px 0 24px'}}>
    <p style={{fontFamily:'oswald',fontSize:'24px',marginBottom:'8px',color:'#E81088'}}>Summary</p>
    <p style={{fontSize:'14px',color:'#757575',fontFamily:'oswald'}}>the total cost consist of the tax,and shipping charge</p>
    </div>
<div className="d-flex my-2">
  <p style={{fontSize:'18px'}}>Items Total :  </p>
  <p style={{fontWeight:'bold',fontSize:'18px',color:'#E81088',marginLeft:'4px'}}> 150 AED</p>
</div>
<div className="d-flex mb-2">
  <p >Delivery Fee:  </p>
  <p style={{fontWeight:'bold',fontSize:'18px',color:'#E81088',marginLeft:'4px'}}> 150 AED</p>
</div>
</div>
<div style={{width:'100%',border:'1px solid #E81088',borderRadius:'24px',padding:'0 8px'}}></div>

<div className="d-flex  p-3" style={{fontFamily:'oswald'}}>
  <p style={{fontSize:'18px'}}>Total Fee :</p>
  <p style={{fontWeight:'bold',fontSize:'18px',color:'#E81088',marginLeft:'4px'}}> 150 AED</p>
  </div>

  <div className="d-flex px-1 py-3 align-items-center  w-75 mb-3  shadow-sm"style={{marginLeft:'16px',position:'relative',border:'1px dashed #000',borderRadius:'24px'}}>
    <div className="" style={{position:'absolute',top:'-12px',left:'20px',fontFamily:'lato',background:'pink',borderRadius:'12px',padding:' 0 8px',color:'white'}}>Payment Method</div>
    <div className="mt-1">
        <input 
         className="mx-2"
          type="radio" 
          id="cashondelivery" 
          name="paymentMethod" 
          value="cashondelivery" 
          checked={true} 
          onChange={()=>console.log('safi')} 
        />
          <label htmlFor="cashondelivery" className="m-0" style={{fontSize:'18px',fontFamily:'oswald',color:'#212529'}}>Cash on Delivery</label>
          <img src='/assests/images/delivery-truck.svg' alt='toma-boutique' width="32px" height="32px" style={{
            marginLeft:'8px'
          }}/>
          </div>
       
      </div>
</div>

 
<button
              disabled={false}
              onClick={() => handleMakeOrder()}
              className="  w-75 mt-3 bgPink  p-3 "
              style={{color:'white',fontFamily:'lato',fontWeight:'bold',fontSize:'18px',borderRadius:'24px'}}
            >
              Submit your order
            </button>
<div>

</div>
        </div>



        </div>
        <StatusModal showStatusModal={showStatusModal} setShwoStatusModal={setShwoStatusModal}/>
        </div>
     );
}
 
export default Cart;