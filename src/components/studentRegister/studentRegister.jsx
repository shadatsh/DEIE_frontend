import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./studentRegister.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import MetaData from "../layouts/MetaData";



const StudentRegister = () => {
  const navigate = useNavigate();

  const initialValues = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const onSubmit = async (values, { setSubmitting, setStatus }) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/register",
      values
    );
    const { success, token, user } = response.data;
    if (success) {
      navigate("/student-login");
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
        <MetaData title={`Register`} />  
        <h2>Registration Form</h2>
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
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.error}
                />
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

export default StudentRegister;
