import { useState, useEffect } from "react";
import { getProductApi,getProductBySearch } from '../../api/productApi'
import SingleProduct from "./singleProduct";
import SectionTitle from "../sectionTitle/sectionTitle";
const ProductContainer = ({search,setSearch}) => {

    const [prodcuts, setProducts] = useState([]);
    const [loading, setLoadign] = useState(false);
    const[error, setError] = useState('')
    const fetchProductsApi = async () => {
      if(search.length > 0) return;
     try {
            setLoadign(true)
            const {data} = await getProductApi();
            if (data) {
              setProducts(data)
            }
            else throw Error('there is no data')
        }catch(err){
            setError(err)
        }
        finally{
            setLoadign(false)
        }

}
const fetchProductsApiBySearch = async (q) => {
 try {
        setLoadign(true)
        const {data} = await getProductBySearch(q);
        if (data) {
          setProducts(data)
        }
        else throw Error('there is no data')
    }catch(err){
        setError(err)
    }
    finally{
        setLoadign(false)
    }

}
useEffect( ()=>{
    fetchProductsApi()
    if (search.length >1 ){
      fetchProductsApiBySearch(search)

    }
},[search])

    return (
        <>
        {loading ? <h3> loading...</h3>:(
           <div className=" position-relative">
           <SectionTitle  title='Our Products'/>
<div style={{width:'100%',height:'32px'}}></div>
           <div className="flexBetween">
           {prodcuts?.map((product) => (
             <div className="m-2 rounded-2" key={product._id}>

               <SingleProduct
                 productType={product?.product_type}
                 productPrice={product?.product_price}
                 productName={product?.product_name}
                 productImage={product?.product_image}
                 productId={product?.product_id}
               />
             </div>
           ))}
              </div>
              
             
          
         </div>

            
        )
    }
     </>
    );
}

export default ProductContainer;