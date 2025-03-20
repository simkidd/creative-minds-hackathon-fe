import { useAppSelector } from "@/store/hooks";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // If the user is authenticated, render the protected route
  return <Outlet />;
};

export default ProtectedRoute;
