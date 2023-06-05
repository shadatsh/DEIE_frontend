import React, { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (email, password) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // authenticate user and set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // clear authentication state and set isLoggedIn to false
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
