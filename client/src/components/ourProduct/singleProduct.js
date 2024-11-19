
import { useNavigate } from "react-router-dom";
import heart from '../../assests/images/heart.svg'
import { useDispatch,useSelector } from "react-redux";
import { addToWishlist } from "../../redux/reducer/wishListReducer";
import './index.css'
const SingleProduct = ({  productPrice, productName,productImage,productId,hasDiscount,discountValue,discountReason }) => {


    const dispatch = useDispatch()
    const wishlist  = useSelector(state =>state.wishList)

    const navigate = useNavigate()
    const addProductToBasket = (id)=>{
        navigate(`/product/${id}`)

    }

    const tagColor = {
        newArrival:"#28a745",
        Discounted:"#ef233c",
        spicalOffer:"#007bff",
        nearExpire:"#914F1E"
    }

    const handleTag = () =>{
        if(hasDiscount){
        const data = discountReason.split(' ');
        if(data.length >1){
         return data[0].slice(0,1).toLowerCase()+data[0].slice(1) + data[1].slice(0,1).toUpperCase()+data[1].slice(1)  
        }
        return data[0].slice(0,1).toUpperCase()+data[0].slice(1)         }
        return 0;
    }
    console.log(wishlist,'wishlist')
    return (
        <>
        <div className="card cardMargin border-0  rounded-0 bg-.bg-secondary shadow">
            <div className="d-flex align-items-center">
            { hasDiscount && <div className="soldout-tag" style={{
                background : tagColor[handleTag()]
            }}>{discountReason} <br/>{discountValue} safi 
            </div>
            }
            <button
            onClick={()=>dispatch(addToWishlist({productId,productName,productPrice,productImage}))}
             style={{margin:'0 8px 0 auto',borderRadius:'50%'}}><img src={heart} alt='toma-ecomerce' width={30} height={30} /> </button>
            </div>
      
            <div className="pt-2">
            <div className="blurry-section" style={{width:'300px',height:'160px',background:'#fff0f5',position:'relative',margin:'24px auto 16px',borderRadius:'10px'}}>
            <img src={`http://baby-bucket-product.s3.amazonaws.com/${productImage}`} 
            alt="productImage" 
            width={200} 
            height={180} 
            style={{position:'absolute',top:'-10px',left:'40px',borderRadius:'5px'}}
            />
            </div>
            </div>
            <div  className="mt-3"  >
            <h3 className="card-title m-0 py-1 text-center  " style={{fontFamily:'Oxygen, sans-serif',color:'#3F3E42',fontFamily:'oswald'}}> {productName}</h3>
            <p className="px-3 py-2 m-0 text-center" style={{fontSize:'14px',fontFamily:'lato'}}>In publishing and graphic design, Lorem ipsum  form of a document or a typeface without</p>

        <div className=" p-2 ">

            <p className="mb-3  text-center " style={{ fontSize: '22px',color:'#E80F88',fontFamily:'oswald, sans-serif' }}>${productPrice}</p>
        </div>
        <div className="d-flex  ">
            <button className="btn btn-success border-0  rounded-0  w-100 text-white p-3" style={{background:'#F39FDC',fontFamily:'lato'}} onClick={()=>addProductToBasket(productId)} >Add To Cart</button>
        </div>
            </div>
    
    </div>
    </>
    );
}

export default SingleProduct;