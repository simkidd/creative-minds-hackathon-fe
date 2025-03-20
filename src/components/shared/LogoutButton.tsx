import useLogout from "@/hooks/useLogout";
import { LogoutCurve } from "iconsax-react";
import React from "react";
import { Button } from "../ui/button";

const LogoutButton: React.FC = () => {
  const { logout } = useLogout();

  return (
    <Button
      variant={"destructive"}
      onClick={logout}
      className="cursor-pointer w-full text-sm lg:justify-start justify-center"
    >
      <LogoutCurve />
      Logout
    </Button>
  );
};

export default LogoutButton;
