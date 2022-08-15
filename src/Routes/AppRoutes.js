import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/login" element={<LoginPage />} />

      <Route replace element={<AuthRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
