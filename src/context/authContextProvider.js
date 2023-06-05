import React from "react";
import { useState } from "react";
import AuthContext from "./authContext";
import Cookies from "js-cookie";
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const logout = () => {
    setUser(null);
    Cookies.remove('user');
    Cookies.remove('token');
    Cookies.remove('username');
    //reload page
    window.location.reload();

  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
