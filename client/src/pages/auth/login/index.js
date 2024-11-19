import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const Login = () => {
  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Submit handler
  const handleSubmit = (values) => {
    console.log("Login data:", values);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="input-container">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label">
                Password:
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button"
            >
              Login
            </button>
            <div className="link-container">
              <a href="/forgot-password" className="link">
                Forgot Password?
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
