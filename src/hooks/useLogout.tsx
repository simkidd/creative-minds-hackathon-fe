import { useAppDispatch } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { TOKEN_NAME } from "@/constants/app.constant";
import { resetAuthState } from "@/store/features/auth/auth.slice";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    navigate("/auth/login");
    cookies.remove(TOKEN_NAME);
    dispatch(resetAuthState());
  };

  return { logout };
};
export default useLogout;
