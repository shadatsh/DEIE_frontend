import React, { useState } from 'react';
import styles from "./resetPassword.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const [isResetSuccessful, setIsResetSuccessful] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const resetToken = new URLSearchParams(navigate().location.search).get('resetToken');
      const response = await axios.post(
        "http://localhost:8000/api/v1/",
        values
      );

      if (response.ok) {
        setIsResetSuccessful(true);
      } else {
        const error = await response.json();
        setFieldError("password", error.message);
        setSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setFieldError("password", "An error occurred. Please try again later.");
      setSubmitting(false);
    }
  };

  if (isResetSuccessful) {
    return (
      <div className={styles.container}>
        <div>
          Your password has been reset successfully. Please go back to the login page to login with your new password.
        </div>
      </div>
    );
  }

  const searchParams = new URLSearchParams(window.location.search);
  const resetToken = searchParams.get('resetToken');

  if (!resetToken) {
    return (
      <div className={styles.container}>
        <div>
          Reset token is missing. Please click on the reset password link from your email.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        Enter your new password below.
      </div>
      <div className={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="div" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;

