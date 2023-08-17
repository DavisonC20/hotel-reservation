import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/managehotels" replace/>
  );
}

export default PrivateRoute;
