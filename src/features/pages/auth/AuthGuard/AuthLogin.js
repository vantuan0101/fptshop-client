import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthLogin = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  // console.log(user.email);
  if (user) {
    return <Navigate to="/" />;
  } 
  return <>{children}</>;
};

export default AuthLogin;
