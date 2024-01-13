import { useState,useEffect } from "react";
import { getProductApi } from "../../api/productApi";
import './index.css'
import remove from '../../assests/images/delete-svgrepo-com .svg'
import edit from '../../assests/images/edit.svg'
import view from '../../assests/images/view.svg'
import ViewProductModal from "../../components/modal/viewProductDetails";
import DeleteProductModal from "../../components/modal/deleteProduct";
import UpdateProductModal from "../../components/modal/updateProduct";
import { getProductBySearch,changeProductVisibility } from "../../api/productApi";
const ProductsAdmin = ({search}) =>{

  const [isChecked, setIsChecked] = useState(false); 
    const [prodcuts, setProducts] = useState([]);
    const [productId,setProductId] = useState()
    const [productName,setProductName] = useState('')
    const [loading, setLoadign] = useState(false);
    const[error, setError] = useState('')
    const [showViewProductModal,setShowViewProductModal] = useState(false)
    const [showDeleteProductModal,setShowDeleteProductModal] = useState(false)
    const [showUpdateProductModal,setShowUpdateProductModal] = useState(false)


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
},[showDeleteProductModal,showUpdateProductModal,search,isChecked])

const handleCheckboxChange = async(id) =>{
  await changeProductVisibility(id).then(res=>{
    console.log(res)
    setIsChecked(!isChecked)
  }).catch(err=>{
    console.error(err)
  })
}
return (
    <>
    <div className="container mt-4">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
          <th style={{textAlign: "center"}}>ID</th>
          <th>Product Name</th>
          <th> Product Price</th>
          <th> Product Type</th>
          <th> Product Category</th>
          <th> Product Admin</th>
            <th> Product Seen</th>
            <th>Product Visibility </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prodcuts.map((product, index) => (
            <tr key={index}>
            <td>{product.product_id}</td>
             <td>{product.product_name}</td>
             <td>{product.product_price}</td>
             <td>{product.product_type}</td>
             <td>{product.product_category}</td>
              <td>{product.product_admin}</td>
              <td>{product.product_seen}</td>
              <td>
              <input
        type="checkbox"
        checked={product.product_visibility}
        onClick={()=>handleCheckboxChange(product.product_id)}
      />

              </td>
              <td className="d-flex gap-1">
               <img src={view} alt="toma-boutique" onClick={()=>{
                setShowViewProductModal(true)
                setProductId(product.product_id)
                }}/>
              <img src={edit} alt="toma-boutique" onClick={()=>{
                setShowUpdateProductModal(true)
                setProductId(product.product_id)
                }}/>
              <img src={remove} alt="toma-boutique" onClick={()=>{
                setShowDeleteProductModal(true)
                setProductId(product.product_id)
                setProductName(product.product_name)
                }}/> 
                </td>


           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    { !!productId && 
    <>
   <ViewProductModal showProductsModal={showViewProductModal} productId={productId} setShowPorductsModal={setShowViewProductModal}/>
   <DeleteProductModal  productName={productName} showProductsModal={showDeleteProductModal} productId={productId} setShowPorductsModal={setShowDeleteProductModal}/>
   <UpdateProductModal  showProductsModal={showUpdateProductModal} productId={productId} setShowPorductsModal={setShowUpdateProductModal}/>
</>
    }

    </>
  );
}

export default ProductsAdmin;