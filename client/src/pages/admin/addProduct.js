import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.css"

export const ProductForm = () => {
  const validationSchema = Yup.object().shape({
    product_image: Yup.mixed().required('Product Image is required'),
    product_id: Yup.number().required('Product ID is required'),
    product_admin: Yup.string().required('Product Admin is required'),
    product_name: Yup.string().required('Product Name is required'),
    product_type: Yup.string().required('Product Type is required'),
    product_price: Yup.string().required('Product Price is required'),
    product_old_price: Yup.string(),
    product_Size: Yup.array(),
    product_Color: Yup.array(),
    product_description: Yup.string().required('Product Description is required'),
    product_seen: Yup.string().required('Product Seen is required'),
    product_category: Yup.string().required('Product Category is required'),
    product_quantity: Yup.number().required('Product Quantity is required'),
    product_stock: Yup.number(),
    product_tag: Yup.string(),
    product_soldout:Yup.array(),


  });
  const categoryOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'furniture', label: 'Furniture' },
    // Add other category options as needed
  ];
  const initialValues = {
    product_id: '',
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
    product_tag:'',
    product_isDiscounted:false,
    product_discount_value:'',
    product_discount_reason:''

  };

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();

formData.append('product_image', values.product_image);
formData.append('product_Color', JSON.stringify([]));
formData.append('product_Size', JSON.stringify([]));
formData.append('product_admin', values.product_admin);
formData.append('product_category', values.product_category);
formData.append('product_description',values.product_description);
formData.append('product_id', values.product_id);
formData.append('product_name', values.product_name);
formData.append('product_old_price', values.product_old_price);
formData.append('product_price',values.product_price);
formData.append('product_quantity', values.product_quantity);
formData.append('product_seen', values.product_seen);
formData.append('product_stock', values.product_stock); 
formData.append('product_type', values.product_type);
formData.append('product_tag', values.product_old_price);
formData.append('product_soldout[]', values.product_isDiscounted);
formData.append('product_soldout[]', values.product_discount_value);
formData.append('product_soldout[]', values.product_discount_reason);

 fetch('http://localhost:4060/products/add', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          
        } else {
          throw new Error('Failed to post data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting,setFieldValue }) => (
        <Form className='d-flex justify-content-center align-items-center flex-column w-75  mx-auto' >
        <p className='my-5 p-3 ' style={{fontSize:'34px',fontFamily:'oswald',borderBottom:'1px solid #232323'}}>Add Product Form</p>

              <div className='inputRow'>
          <div className='inputContainer'>
            <label htmlFor="product_image">Product Image:</label>
            <input
              id="product_image"
              name="product_image"
              type="file"
              onChange={(event) => {
                setFieldValue("product_image", event.currentTarget.files[0]);
              }}
              className='addProductInput'
            />
            <ErrorMessage name="product_image" component="div" className='errorMessage' />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_id">Product ID:</label>
            <Field type="number" name="product_id"  className='addProductInput' />
            <ErrorMessage name="product_id" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_admin">Product Admin:</label>
            <Field type="text" name="product_admin"               className='addProductInput'
 />
            <ErrorMessage name="product_admin" component="div" className='errorMessage' />
          </div>
          </div>  
          <div className='inputRow'>
          <div  className='inputContainer'>
            <label htmlFor="product_name">Product Name:</label>
            <Field type="text" name="product_name"               className='addProductInput'
 />
            <ErrorMessage name="product_name" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_type">Product Type:</label>
            <Field as="select" name="product_type"               className='addProductInput'
>
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
          </div>
<div className='inputRow'>
          <div  className='inputContainer'>
            <label htmlFor="product_old_price">Product Old Price:</label>
            <Field type="text" name="product_old_price"               className='addProductInput'
 />
            <ErrorMessage name="product_old_price" component="div" />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_description">Product Description:</label>
            <Field type="text" name="product_description"               className='addProductInput'
 />
            <ErrorMessage name="product_description" component="div" className='errorMessage' s />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_seen">Product Seen:</label>
            <Field type="text" name="product_seen"                className='addProductInput'
/>
            <ErrorMessage name="product_seen" component="div" className='errorMessage'  />
          </div>
          </div>
          <div className='inputRow'>
          <div  className='inputContainer'>
            <label htmlFor="product_category">Product Category:</label>
            <Field as="select" name="product_category"               className='addProductInput'
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
          </div>
          <div className='inputRow'>
          <div  className='inputContainer'>
            <label htmlFor="product_size">Product Size:</label>
            <Field type="text" name="product_size"               className='addProductInput'
 />
            <ErrorMessage name="product_size" component="div"className='errorMessage'  />
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_color">Product Color:</label>
            <Field type="text" name="product_color"               className='addProductInput'
 />
            <ErrorMessage name="product_color" component="div"className='errorMessage'  />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_tag">Product tag:</label>
            <Field type="text" name="product_tag"               className='addProductInput'/>
        <ErrorMessage name="product_tag" component="div"className='errorMessage'  />
          </div>
          </div>

          <div className='inputRow'>
          <div  className='inputContainer'>
            <label htmlFor="product_isDiscounted">has Discount:</label>
            <Field type="checkbox" name="product_isDiscounted"className=""/>
          </div>
          <div  className='inputContainer'>
            <label htmlFor="product_discount_value">Product_discount:</label>
            <Field type="text" name="product_discount_value" className='addProductInput'/>
            <ErrorMessage name="product_discount_value" component="div"className='errorMessage'  />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="product_discount_reason">Product reason:</label>
            <Field type="text" name="product_discount_reason" className='addProductInput'/>
           <ErrorMessage name="product_discount_reason" component="div"className='errorMessage'  />
          </div>
          </div>
          <button type="submit" disabled={false}  style={{fontFamily:'lato'}} className='btn btn-primary btn-lg w-50 m-3 bgPink border-0'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};


