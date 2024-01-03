
import { useNavigate } from "react-router-dom";
import './index.css'
const SingleProduct = ({  productPrice, productName,productImage,productId }) => {


    const navigate = useNavigate()

    const addProductToBasket = (id)=>{
        navigate(`/product/${id}`)

    }
    return (
        <>
        <div className="card m-5  border-0  rounded-0 bg-.bg-secondary shadow" style={{ width: '340px'}} >
            <div className="mt-4">
            <div className="blurry-section" style={{width:'280px',height:'140px',background:'#fff0f5',position:'relative',margin:'16px auto',borderRadius:'10px'}}>
            <img src={`http://baby-bucket-product.s3.amazonaws.com/${productImage}`} 
            alt="productImage" 
            width={200} 
            height={180} 
            style={{position:'absolute',top:'-10px',left:'40px',borderRadius:'5px'}}
            />
            </div>
            </div>
            <div  className="mt-3"  >
            <h3 className="card-title m-0 py-3 text-center  " style={{fontFamily:'Oxygen, sans-serif',color:'#3F3E42',fontFamily:'oswald'}}> {productName}</h3>
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