import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function AuthRoute() {
  const location = useLocation();
  const isAuthenticated = useAuthContext();

  return (
    <>
      {isAuthenticated[0] ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
}
