import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar,Nav,Container } from "react-bootstrap";
import { getProductById } from "../api/productApi";
import heart from '../assests/images/heart.svg'
import basket from '../assests/images/whiteBasket.svg'
import eye from '../assests/images/eye-svgrepo-com.svg'
import Imagecarousel from "../components/slidder/imagecarousel";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/reducer/productReducer";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';

export const ProductId = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const product  = useSelector(state =>state.product)

  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity,setQuantity] = useState(1)
  const [error,setError] =useState('')
  
  const fetchProductById = async () => {
    if (currentProduct?.product_id === id) return; 
  
    const productById = await getProductById(id);
    const data = productById.data;
    setCurrentProduct({ ...data });
  };
  
  useEffect(() => {
    fetchProductById();
  

  }, []);
  const handleIncrement = () =>{
    if(quantity > 6){
      setError('you exceed order limit')
      return
    }
    setQuantity(q =>q+1)
  }
  const handleDecrement = () =>{
    if(quantity < 2 ){
      setError('At least your order should be one')
      return
    }
    setQuantity(q =>q-1)

  }
  const addProductToBasket = (type) =>{
    if(type=='buy'&& product.length >=1){
      return
    }
    const {product_price:productPrice,product_image:productImage,product_name:productName,product_id:id} = currentProduct;
          dispatch(addProduct({productPrice,productImage,productName,id,quantity}))
          toast.success('we add this produt to your basket!', {
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
  const tagColor = {
    newArrival:"#28a745",
    Discounted:"#ef233c",
    spicalOffer:"#007bff",
    nearExpire:"#914F1E"
}

const handleTag = () =>{
    if(currentProduct?.product_soldout[0]){
    const data = currentProduct?.product_soldout?.[2]?.split(' ');
    if(data.length >1){
     return data[0].slice(0,1).toLowerCase()+data[0].slice(1) + data[1].slice(0,1).toUpperCase()+data[1].slice(1)  
    }
    return data[0].slice(0,1).toUpperCase()+data[0].slice(1)         }
}
  return (

    <div style={{paddingTop:'128px'}}>
      <div className="flexCenter my-3">
        <div style={{ margin:'0 auto' ,width:'500px',position:'relative'}}>
       {
        currentProduct?.product_soldout?.[0] == "true" && <div className="soldout-tag" style={{background:tagColor[handleTag()],position:'absolute',transform:'rotate(-25deg)',top:'-8px',left:'-64px',opacity:'.82'}}>{currentProduct.product_soldout[2]} <br/>{currentProduct.product_soldout[1]}</div>
       }
       

          <img
            src={`http://baby-bucket-product.s3.amazonaws.com/${currentProduct["product_image"]}`}
            alt="productImage"
            width={"100%"}
            height={450}
            style={{
              margin: "0 auto 32px",
              borderRadius: "24px",
              
            }}
          />
        </div>
        <div
          style={{ minHeight: "100%",width:'570px' }}
          className="productRightSection p-3 mobileSize"
        >
          <p style={{fontWeight:'bold',fontSize:'24px'}}>{currentProduct.product_name}</p>
          <p style={{width:'90%'}}>{currentProduct.product_description} </p>
          <div className="d-flex align-items-center py-2 mb-3 mt-1 center"style={{fontFamily:'alto,sans-serif'}}>
            <p style={{ color: "#E10600" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              <s>{currentProduct.product_old_price}</s>{" "}
            </p>
            <p style={{ marginLeft: "8px" }} className="m-0">
              <span style={{fontWeight:'bold'}} className="mx-1">Dhs.</span>
              {currentProduct.product_price}
            </p>
          </div>
          {currentProduct.color && (
            <div>
              <p>Color :</p>
            </div>
          )}

          <div className="d-flex flex-column justify-content-center mb-4">
            <label for="quantity" className="mb-1" style={{fontFamily:'alto,sans-serif'}}>
              Quantity:
            </label>
            <div style={{fontFamily:'oswald,sans-serif',display:'flex',alignItems:'center'}}>

              <button
                className="spin"
                style={{ background: "#E95144"}}
                onClick={()=>handleDecrement()}
              >
                -
              </button>

              <input
                type="number"
                id="quantity"
                name="quantity"
                className="modern-input"
                value={quantity}
                style={{width:"60px",textAlign:'center',height:'30px',marginTop:'16px'}}
              />
              <button className="spin" style={{ background: "#27c8a3" }} onClick={()=>handleIncrement()}>
                +
              </button>
            </div>
          </div>
          <div className="mb-4" style={{fontFamily:'alto,sans-serif'}}>
            <p>Subtotal Dhs:<span style={{fontFamily:'oswald,sans-serif',margin:"3px"}}>{currentProduct.product_price * quantity}</span></p>
          </div>
            <button className="buyNow d-flex justify-content-center align-items-center " onClick={()=>addProductToBasket('add')}>Add To Cart <img src={basket} alt='toma-ecomerce' width={30} height={30} /></button>
            <button className="buyNow" style={{background:'#27c8a3'}} onClick={()=>{addProductToBasket('buy');navigate('/cart')}}>Go to Checkout <img src={heart} alt='toma-ecomerce' width={30} height={30} /></button>
          <div className="mt-3">
            <p><img src={eye} alt="toma-store" style={{marginRight:'8px',fontFamily:'lato,sans-serif'}}/>{currentProduct.product_seen} Customers Are Viewing This product</p>
          </div>
        </div>
      </div>
    <  Imagecarousel   /> 
    </div>

  );
};
