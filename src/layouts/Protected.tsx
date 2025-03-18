import { useAppSelector } from "@/store/hooks";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // If the user is authenticated, render the protected route
  return <Outlet />;
};

export default ProtectedRoute;
