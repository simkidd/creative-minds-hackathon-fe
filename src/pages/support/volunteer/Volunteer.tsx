import { useAppSelector } from "@/store/hooks";
import { Navigate, useLocation } from "react-router-dom";

const Volunteer = () => {
  const { token } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <div>Volunteer</div>;
};

export default Volunteer;
