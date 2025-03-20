import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { fetchUser, loginUser } from "@/lib/api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { TOKEN_NAME } from "@/constants/app.constant";
import { useAppDispatch } from "@/store/hooks";
import { setToken, setUser } from "@/store/features/auth/auth.slice";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log("login success>>>", data);
      toast.success("Login successful");
      cookies.set(TOKEN_NAME, data.token);
      dispatch(setToken(data.token));

      // Fetch the user data after login
      try {
        const userData = await fetchUser();
        console.log("fetchUser", userData);
        if (userData) {
          dispatch(setUser(userData));
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        toast.error("Failed to fetch user data");
      }

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log("error", error?.response?.data?.error);
      // dispatch(loginFailure(error?.response?.data?.error || "Login failed"));
      toast.error(error?.response?.data?.error || error?.message);
    },
  });

  return {
    loginMutation,
  };
};
