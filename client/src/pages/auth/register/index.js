import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const Register = () => {
  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    terms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("Terms and Conditions are required"),
  });

  // Initial form values
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    terms: false,
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Registration Successful!");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="register-form">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" id="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <div className="input-container">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" name="phoneNumber" id="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" className="error-message" />
            </div>

            <div className="input-container terms-container">
              <Field type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="/terms">terms and conditions</a>
              </label>
              <ErrorMessage name="terms" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-button">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
