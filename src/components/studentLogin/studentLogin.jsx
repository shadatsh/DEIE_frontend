import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./studentLogin.module.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const StudentLogin = () => {
  const navigate = useNavigate();

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});


const onSubmit = async (values, { setSubmitting, setStatus }) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/login', values);
    const { success, token, user } = response.data;
    const {error} = response
    if (success) {
      Cookies.set('token', token);
      Cookies.set('user', user);
      navigate("/");
      // You can also store user data in your state if needed
      setStatus({ success: true, user });
    } else {
      setStatus({ success: false });
    }
  } catch (error) {
    alert(error.response.data.message);
    setStatus({ success: false });
  } finally {
    setSubmitting(false);
  }
};
 return (
  <div className={styles.container}>

    <div className={styles.formContainer}>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <br/>
            
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <br/>
            <br/>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/forgot-password">Forgot username or Password?</Link>
      <div>
        <Link to="/student-register">Register</Link>
      </div>
    </div>
  </div>
);
};
export default StudentLogin;