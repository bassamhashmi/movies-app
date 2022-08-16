import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function AuthRoute({ children }) {
  const location = useLocation();
  const [isAuthenticated] = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}
