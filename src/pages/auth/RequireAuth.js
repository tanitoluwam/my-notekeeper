import React from "react";
import { useAuthContext } from "context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  // const { user } = useAuthContext();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
