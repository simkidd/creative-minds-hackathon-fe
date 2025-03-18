import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div>Auth layout</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
