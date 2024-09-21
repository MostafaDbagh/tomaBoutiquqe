import React,{useState,useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateProduct } from '../../api/productApi';
import * as Yup from 'yup';

import { Modal, Button } from 'react-bootstrap';
import { getProductById } from '../../api/productApi';
import { ToastContainer,toast } from 'react-toastify';
import ConfirmAction from './cofirmUpdate';
const UpdateProductModal = ({ showProductsModal,productId, setShowPorductsModal:handleClose }) => {

  const [showConfirmModal,setShowConfirmModal] = useState(false)

const [currentProduct,setcurrentProduct] = useState({})
const validationSchema = Yup.object().shape({
    product_image: Yup.mixed().required('Product Image is required'),
    product_id: Yup.number().required('Product ID is required'),
    product_admin: Yup.string().required('Product Admin is required'),
    product_name: Yup.string().required('Product Name is required'),
    product_type: Yup.string().required('Product Type is required'),
    product_price: Yup.string().required('Product Price is required'),

    product_description: Yup.string().required('Product Description is required'),
    product_seen: Yup.string().required('Product Seen is required'),
    product_category: Yup.string().required('Product Category is required'),
    product_quantity: Yup.number().required('Product Quantity is required'),
    product_stock: Yup.number(),
    product_old_price: Yup.string(),
    product_Size: Yup.array(),
    product_Color: Yup.array(),
  });
  const categoryOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'furniture', label: 'Furniture' },
  ];
  const initialValues = {
    product_id: currentProduct?.product_id,
    product_admin: '',
    product_name: '',
    product_type: '',
    product_price: '',
    product_old_price: '',
    product_Size: [],
    product_Color: [],
    product_description: '',
    product_seen: '',
    product_category: '',
    product_quantity: '',
    product_stock: '',
  };

  const handleSubmit = async(values, { setSubmitting }) => {



const res  = await updateProduct(productId,values);
handleClose(false);

setShowConfirmModal(true)
  }


const getcurrentProduct = async(id) =>{
    const res = await getProductById(id);
    setcurrentProduct(res?.data)
    
}



useEffect(()=>{
    getcurrentProduct(productId)
},[productId])
  return (
    <>
          <ToastContainer/>
    <Modal show={showProductsModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
            <div style={{fontSize:'34px',fontFamily:'oswald'}}>Update Product  </div>
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
      initialValues={currentProduct}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true} 
    >
      {({ isSubmitting,setFieldValue }) => (
        <Form className='d-flex justify-content-center align-items-center flex-column w-75  mx-auto' >
        <p className='my-5 p-3 ' style={{fontSize:'34px',fontFamily:'oswald',borderBottom:'3px solid #ffd1da'}}>Update Product Form</p>

          <div className='inputContainer'>
            <label htmlFor="product_image">Product Image:</label>
            <input
            className='addProductInput'
              id="product_image"
              name="product_image"
              type="file"
              onChange={(event) => {
                setFieldValue("product_image", event.currentTarget.files[0]);
              }}
            />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_id">Product ID:</label>
            <Field type="number" name="product_id"  className='addProductInput'   disabled  />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_admin">Product Admin:</label>
            <Field type="text" name="product_admin" className='addProductInput' />
            <ErrorMessage name="product_admin" component="div" className='errorMessage' />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_name">Product Name:</label>
            <Field type="text" name="product_name" className='addProductInput'  />
            <ErrorMessage name="product_name" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_type">Product Type:</label>
            <Field as="select" name="product_type"className='addProductInput'  >
              <option value="" disabled>
                Select Type
              </option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="product_type" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_price">Product Price:</label>
            <Field type="text" name="product_price"               className='addProductInput' 
/>
            <ErrorMessage name="product_price" component="div" className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_old_price">Product Old Price:</label>
            <Field type="text" name="product_old_price"               className='addProductInput' 
 />
            <ErrorMessage name="product_old_price" component="div" />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_description">Product Description:</label>
            <Field type="text" name="product_description"                className='addProductInput'/>
            <ErrorMessage name="product_description" component="div" className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_seen">Product Seen:</label>
            <Field type="text" name="product_seen" className='addProductInput'   
/>
            <ErrorMessage name="product_seen" component="div" className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_category">Product Category:</label>
            <Field as="select" name="product_category" className='addProductInput' defaultValue={currentProduct?.product_category}  
>
              <option value="" disabled>
                Select Category
              </option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="product_category" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_quantity">Product Quantity:</label>
            <Field type="text" name="product_quantity"               className='addProductInput'
 />
            <ErrorMessage name="product_quantity" component="div" className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_stock">Product Stock:</label>
            <Field type="text" name="product_stock" className='addProductInput'
 />
            <ErrorMessage name="product_stock" component="div" className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_size">Product Size:</label>
            <Field type="text" name="product_size"              className='addProductInput'
 />
            <ErrorMessage name="product_size" component="div"className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_color">Product Color:</label>
            <Field type="text" name="product_color"               className='addProductInput'
 />
            <ErrorMessage name="product_color" component="div"className='errorMessage'  />
          </div>

          <button type="submit" disabled={false} className='btn btn-primary btn-lg w-100 m-3 bgPink border-0'>
            Submit
          </button>
        </Form>
      )}
    </Formik>

      </Modal.Body>
      <Modal.Footer>
   
        <Button variant="secondary" onClick={()=>handleClose(false)}>
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
    <ConfirmAction showConfirmModal={showConfirmModal}setShwoConfrimModal={setShowConfirmModal}/>
    </>
  );
};

export default UpdateProductModal
