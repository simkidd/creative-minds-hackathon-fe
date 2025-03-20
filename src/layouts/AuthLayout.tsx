import { Outlet } from "react-router-dom";
import LayoutBg from "@/assets/images/people/smiling-pupil-sitting-her-desk_13339-140893.png";
import Logo from "@/components/shared/Logo";

const AuthLayout = () => {
  return (
    <div className="w-full min-h-dvh grid grid-cols-1 lg:grid-cols-7">
      <div className="hidden lg:block lg:col-span-4 h-dvh relative overflow-hidden">
        <div className="w-full h-full">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(51,51,51,0.5)_-4.73%,rgba(46,134,171,0.5)_95.96%)] z-10"></div>
          <img
            src={LayoutBg}
            alt="layout bg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3 h-dvh overflow-y-auto">
        <div className="h-full">
          <div className="px-4 lg:px-[58px] pt-[26px] mb-[43px]">
            <Logo />
          </div>
          <main className="px-4 lg:px-[58px] pb-10 w-full ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
