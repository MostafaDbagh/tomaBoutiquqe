import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../api/productApi";
import heart from '../assests/images/heart.svg'
import basket from '../assests/images/whiteBasket.svg'
import eye from '../assests/images/eye-svgrepo-com.svg'
import Imagecarousel from "../components/slidder/imagecarousel";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/reducer/productReducer";
import "./style.css";
import { useNavigate } from "react-router-dom";


export const ProductId = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const product  = useSelector(state =>state.product)

  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity,setQuantity] = useState(1)
  const [error,setError] =useState('')
  
  const fetchProductById = async () => {
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
  const addProductToBasket = () =>{
    const {product_price:productPrice,product_image:productImage,product_name:productName,product_id:id} = currentProduct;
          dispatch(addProduct({productPrice,productImage,productName,id,quantity}))
  }
  return (
    <div>
      <div className="flexCenter my-3">
        <div style={{ margin:'0 auto' ,width:'700px'}}>
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
          <h4>{currentProduct.product_description} </h4>
          <div className="d-flex align-items-center py-2 mb-3 mt-1 center"style={{fontFamily:'alto,sans-serif'}}>
            <p style={{ color: "#E10600" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              <s>{currentProduct.product_old_price}</s>{" "}
            </p>
            <p style={{ marginLeft: "8px" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              {currentProduct.product_price}
            </p>
          </div>
          {currentProduct.color && (
            <div>
              <p>Color :</p>
            </div>
          )}

          <div className="d-flex flex-column justify-content-center mb-4">
            <label for="quantity" className="mb-3" style={{fontFamily:'alto,sans-serif'}}>
              Quantity:
            </label>
            <div style={{fontFamily:'oswald,sans-serif'}}>

              <button
                className="spin"
                style={{ background: "#E95144", marginLeft: "0" }}
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
                style={{width:"60px",textAlign:'center'}}
              />
              <button className="spin" style={{ background: "#27c8a3" }} onClick={()=>handleIncrement()}>
                +
              </button>
            </div>
          </div>
          <div className="mb-4" style={{fontFamily:'alto,sans-serif'}}>
            <p>Subtotal Dhs:<span style={{fontFamily:'oswald,sans-serif',margin:"3px"}}>{currentProduct.product_price * quantity}</span></p>
          </div>
          <div className="my-2" style={{fontFamily:'alto,sans-serif'}}>
            <button className="buyNow d-flex justify-content-center align-items-center " onClick={()=>addProductToBasket()}>Add To Cart <img src={basket} alt='toma-ecomerce' width={30} height={30} style={{marginLeft:'6px'}}/></button>
          </div>
          <div className="mb-3">
            <button className="buyNow" style={{background:'#27c8a3'}} onClick={()=>{navigate('/cart')}}>Buy it Now <img src={heart} alt='toma-ecomerce' width={30} height={30} style={{marginleft:'6px'}}/></button>
          </div>
          <div>
            <p><img src={eye} alt="toma-store" style={{marginRight:'8px',fontFamily:'alot,sans-serif'}}/>200 customers are viewing this product</p>
          </div>
        </div>
      </div>
    <  Imagecarousel   /> 
    </div>
  );
};
