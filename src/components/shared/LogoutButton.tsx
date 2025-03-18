import React from "react";
import useLogout from "@/hooks/useLogout";
import { Button } from "../ui/button";

const LogoutButton: React.FC = () => {
  const { logout } = useLogout();

  return (
    <Button
      variant={"destructive"}
      onClick={logout}
      className="cursor-pointer w-full text-sm"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
