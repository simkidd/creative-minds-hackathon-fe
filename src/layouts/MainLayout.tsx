import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/header/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full box-border">
      <Header />
      <main className="min-h-dvh w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
