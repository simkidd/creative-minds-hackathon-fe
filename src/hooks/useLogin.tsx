import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { loginUser } from "@/lib/api/auth";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie"
import { TOKEN_NAME } from "@/constants/app.constant";

export const useLogin = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("login success>>>", data);
      toast.success("Login successful");
      cookies.set(TOKEN_NAME, data.token);
      // cookies.set(USER_DETAILS, JSON.stringify(data?.user));
      // dispatch(loginSuccess({ user: data.user, token: data.token }));
      navigate("/");
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
