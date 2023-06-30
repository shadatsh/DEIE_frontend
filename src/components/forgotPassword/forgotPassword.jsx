  import React from "react";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import styles from "./forgotPassword.module.css";
  import axios from "axios";
  import { Link,useNavigate } from "react-router-dom";
  import MetaData from "../layouts/MetaData";


  const ForgotPassword = () => {
    const navigate = useNavigate();

    const initialValues = {
      email: "",
    };

    const validationSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    });

    const onSubmit = async (values, { setSubmitting, setStatus }) => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/password/forgot', values);
        const { success, message } = response.data;
        if (success) {
          //navigate("/reset-password");
          setStatus({ success: true, message });
        } else {
          setStatus({ success: false, message });
        }
      } catch (error) {
        alert(error.response.data.message);
        setStatus({ success: false, message: "An error occurred. Please try again later." });
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <MetaData title={`Forgot password`} />  
          <h1>Forgot Password</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <br/>
                <button type="submit" disabled={isSubmitting}>
                  Submit 
                </button>
                {status && status.message && (
                  <div className={status.success ? styles.successMessage : styles.errorMessage}>
                    {status.message}
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  export default ForgotPassword;
  