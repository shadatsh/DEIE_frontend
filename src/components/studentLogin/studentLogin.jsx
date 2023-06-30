import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./studentLogin.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import MetaData from "../layouts/MetaData";

const StudentLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        values
      );
      const { success, token, user } = response.data;
      const { error } = response;
      if (success) {
        Cookies.set("token", token);
        Cookies.set("user", user);
        const redirect = location.search
          ? "/" + location.search.split("=")[1]
          : "/";
        navigate(redirect);
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

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const redirect = location.search
        ? "/" + location.search.split("=")[1]
        : "/";
      navigate(redirect);
    }
  }, [navigate, location.search]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <MetaData title={`Login`} />
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
              <br />

              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <br />
              <br />
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
