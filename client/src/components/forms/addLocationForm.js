import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendLocation } from '../../api/productApi';
import * as Yup from 'yup'

const categoryOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'furniture', label: 'Furniture' },
  ];

const initialValues = {
  location_id: '',
  customer_location_first_name: '',
  customer_location_last_name: '',
  customer_location_phone: '',
  customer_location_email: '',
  customer_location_country: '',
  customer_location_city: '',
  customer_location_district: '',
  customer_location_street_address: '',
  location_id:'1'
  
};
const validationSchema = Yup.object().shape({
    customer_location_first_name: Yup.string().required('First Name is required'),
    customer_location_last_name: Yup.string().required('Last Name is required'),
    customer_location_phone: Yup.string().required('Phone is required'),
    customer_location_email: Yup.string().email('Invalid email').required('Email is required'),
    customer_location_country: Yup.string().required('Country is required'),
    customer_location_city: Yup.string().required('City is required'),
    customer_location_district: Yup.string().required('district Address is required'),
    customer_location_street_address: Yup.string().required('Apartment Number is required'),
  });

  const handleSubmit = async(values, { setSubmitting }) => {
     
    const res  = await sendLocation(values);

      }
    
const LocationForm = () => (
  <div className=' p-3  '  >
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true} 
    >
      {({ isSubmitting,setFieldValue }) => (
        <Form className='d-flex justify-content-center align-items-center flex-column w-75  mx-auto' >
        <p className='p-3 ' style={{fontSize:'34px',fontFamily:'oswald',borderBottom:'3px solid #ffd1da'}}>Billing & Shipping</p>
<div className='d-flex p-3'>
          <div  className='inputContainer '>
            <label htmlFor="customer_location_first_name">First Name:</label>
            <Field type="text" name="customer_location_first_name" className='addProductInput' />
            <ErrorMessage name="customer_location_first_name" component="div" className='errorMessage' />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="customer_location_last_name">Last Name:</label>
            <Field type="text" name="customer_location_last_name" className='addProductInput'  />
            <ErrorMessage name="customer_location_last_name" component="div" className='errorMessage' />
          </div>
          </div>

 
          <div className='d-flex p-3'>

          <div  className='inputContainer'>
            <label htmlFor="customer_location_country">Country/Region:</label>
            <Field as="select" name="customer_location_country" className='addProductInput' >
              <option value="" disabled>
                Select Category
              </option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>            
            <ErrorMessage name="customer_location_country" component="div" className='errorMessage'  />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="customer_location_city">City/State:</label>
            <Field type="text" name="customer_location_city" className='addProductInput' />
            <ErrorMessage name="customer_location_city" component="div" className='errorMessage'  />
          </div>
</div>
<div className='d-flex p-3'>
          <div  className='inputContainer'>
            <label htmlFor="customer_location_district">District:</label>
            <Field type="text" name="customer_location_district" className='addProductInput'/>
            <ErrorMessage name="customer_location_district" component="div" className='errorMessage'  />
          </div>

          <div  className='inputContainer'>
            <label htmlFor="customer_location_street_address">Street Address:</label>
            <Field type="text" name="customer_location_street_address" className='addProductInput'/>
            <ErrorMessage name="customer_location_street_address" component="div" className='errorMessage'  />
          </div>
</div>
    
          
          <div className='d-flex'>

<div  className='inputContainer'>
  <label htmlFor="customer_location_phone">Phone Number</label>
  <Field type="text" name="customer_location_phone" className='addProductInput'/>
  <ErrorMessage name="customer_location_phone" component="div" className='errorMessage'  />
</div>

<div  className='inputContainer'>
  <label htmlFor="customer_location_email">Email Address:</label>
  <Field type="text" name="customer_location_email"className='addProductInput'/>
  <ErrorMessage name="customer_location_email" component="div" />
</div>

</div>

          <button type="submit" style={{fontFamily:'lato'}}  className='btn btn-primary btn-lg w-50 m-3 bgPink border-0'>
            Submit Your Location
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LocationForm;
