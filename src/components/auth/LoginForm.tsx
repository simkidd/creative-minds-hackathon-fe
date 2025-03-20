import { useLogin } from "@/hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosed, EyeIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Button } from "../ui/button";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginMutation } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic here
    console.log("Continue with Facebook");
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log("Continue with Google");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="email" className="text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="password" className="text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                <div
                  className="flex items-center rounded-sm text-gray-500 py-[0.375rem]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon size={18} />
                  ) : (
                    <EyeClosed size={18} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="">
          <Button
            size={"lg"}
            type="submit"
            className="w-full mb-4 text-sm cursor-pointer"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending && <LoadingSpinner className="mr-1" />}
            Login
          </Button>
        </div>

        <div className="flex mb-[30px] items-center justify-center gap-6">
          <label className="block mb-0 text-gray-500">
            Don't have an account?
          </label>
          <Link
            to="/auth/signup"
            className="text-primary hover:underline hover:underline-offset-2"
          >
            Sign Up
          </Link>
        </div>
      </form>

      <div className="relative flex items-center justify-center my-8">
        <hr className="w-1/2 border-t border-gray-300" />
        <span className="absolute bg-white px-4 text-gray-500">or</span>
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-4 text-gray-600">Sign in with:</p>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 px-4 rounded-md hover:bg-[#166FE5] transition-colors cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook logo"
              className="w-5 h-5"
            />
            Continue with Facebook
          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-md transition-colors border cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
