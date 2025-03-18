import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div>Dashboard layout</div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
