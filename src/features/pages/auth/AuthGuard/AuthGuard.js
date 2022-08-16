import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  // console.log(user.email);
  if (!user) {
    return <Navigate to="/login" />;
  } 
  return <>{children}</>;
};

export default AuthGuard;
