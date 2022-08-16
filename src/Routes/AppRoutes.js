import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route
        path="dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
    </Routes>
  );
}
