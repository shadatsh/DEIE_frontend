import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HelmetProvider } from 'react-helmet-async'
import Equipments from "./components/equipments/equipments";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Laboratory from "./components/laboratory/laboratory";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import ResetPassword from "./components/resetPassword/resetPassword";
import StudentLogin from "./components/studentLogin/studentLogin";
import CartContextProvider from "./context/cartContextProvider";
import Cart from "./components/cart/cart";
import StudentRegister from "./components/studentRegister/studentRegister";
import AuthContextProvider from "./context/authContextProvider";
import ProtectedRoute from "./route/protectedRoute";

// This is the main App file 

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Router>
          <div className="App">
            <HelmetProvider>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/student-login" element={<StudentLogin />} />
                <Route path="/student-register" element={<StudentRegister />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path='/password/reset/:token' element={<ResetPassword/> } />
                <Route
                  path="/laboratory"
                  element={
                    <ProtectedRoute>
                      <Laboratory />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/laboratory/:labId"
                  element={
                    <ProtectedRoute>
                      <Equipments />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </HelmetProvider>
          </div>
        </Router>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
