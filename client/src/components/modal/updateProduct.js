import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { updateProduct, getProductById } from '../../api/productApi';
import ConfirmUpdateAction from './cofirmUpdate';

const UpdateProductModal = ({ showProductsModal, productId, setShowPorductsModal }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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
    product_soldout: Yup.array(),
  });

  const categoryOptions = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'furniture', label: 'Furniture' },
  ];

  const initialValues = {
    product_id: currentProduct?.product_id || '',
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
    product_isDiscounted: false,
    product_discount_value: '',
    product_discount_reason: '',
  };

  // Array of field configurations
  const fieldConfigs = [
    { name: 'product_id', label: 'Product ID', type: 'number', disabled: true },
    { name: 'product_admin', label: 'Product Admin', type: 'text' },
    { name: 'product_name', label: 'Product Name', type: 'text' },
    { name: 'product_price', label: 'Product Price', type: 'text' },
    { name: 'product_old_price', label: 'Product Old Price', type: 'text' },
    { name: 'product_description', label: 'Product Description', type: 'text' },
    { name: 'product_seen', label: 'Product Seen', type: 'text' },
    { name: 'product_quantity', label: 'Product Quantity', type: 'text' },
    { name: 'product_stock', label: 'Product Stock', type: 'text' },
  ];

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = {
      ...values,
      product_soldout: [values.product_isDiscounted, values.product_discount_value, values.product_discount_reason],
    };
    await updateProduct(productId, data);
    setShowPorductsModal(false)
    setShowConfirmModal(true);
    setSubmitting(false);
  };

  const fetchProduct = async (id) => {
    const res = await getProductById(id);
    setCurrentProduct(res?.data || {});
  };

  useEffect(() => {
    if (productId) fetchProduct(productId);
  }, [productId]);

  return (
    <>
      <ToastContainer />
      <Modal show={showProductsModal} onHide={() => setShowPorductsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div style={{ fontSize: '34px', fontFamily: 'Oswald' }}>Update Product</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              ...currentProduct,
              product_isDiscounted: currentProduct?.product_soldout?.[0] == 'false' ? false :true ,
              product_discount_value: currentProduct?.product_soldout?.[1] || '',
              product_discount_reason: currentProduct?.product_soldout?.[2] || ''
              
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="d-flex flex-column align-items-center w-75 mx-auto">
                <p className="my-5 p-3" style={{ fontSize: '34px', fontFamily: 'Oswald', borderBottom: '3px solid #ffd1da' }}>
                  Update Product Form
                </p>

                <div className="inputContainer">
                  <label htmlFor="product_image">Product Image:</label>
                  <input
                    className="addProductInput"
                    id="product_image"
                    name="product_image"
                    type="file"
                    onChange={(event) => setFieldValue('product_image', event.currentTarget.files[0])}
                  />
                </div>

                {fieldConfigs.map(({ name, label, type, disabled }) => (
                  <div className="inputContainer" key={name}>
                    <label htmlFor={name}>{label}:</label>
                    <Field type={type} name={name} className="addProductInput" disabled={disabled} />
                    <ErrorMessage name={name} component="div" className="errorMessage" />
                  </div>
                ))}

                <div className="inputContainer">
                  <label htmlFor="product_type">Product Type:</label>
                  <Field as="select" name="product_type" className="addProductInput">
                    <option value="" disabled>
                      Select Type
                    </option>
                    {categoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="product_type" component="div" className="errorMessage" />
                </div>

                <div className="inputContainer">
                  <label htmlFor="product_discount_value">Product Discount:</label>
                  <Field type="text" name="product_discount_value" className="addProductInput" />
                  <ErrorMessage name="product_discount_value" component="div" className="errorMessage" />
                </div>

                <div className="inputContainer">
                  <label htmlFor="product_discount_reason">Discount Reason:</label>
                  <Field type="text" name="product_discount_reason" className="addProductInput" />
                  <ErrorMessage name="product_discount_reason" component="div" className="errorMessage" />
                </div>
                <div className="inputContainer">
                  <label htmlFor="product_isDiscounted">Has Discount:</label>
                  <Field type="checkbox" name="product_isDiscounted" className="addProductInput" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="btn btn-primary w-100 m-3 bgPink border-0">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPorductsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ConfirmUpdateAction showConfirmModal={showConfirmModal} setShwoConfrimModal={setShowConfirmModal} />
    </>
  );
};

export default UpdateProductModal;
