import { signUpUser } from "@/lib/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { EyeClosed, EyeIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Button } from "../ui/button";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
});

export type SignupFormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
  });

  const signupMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success("Signup successful");
      reset();
      navigate("/auth/login");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log("error", error?.response?.data?.error);
      // dispatch(loginFailure(error?.response?.data?.error || "Login failed"));
      toast.error(error?.response?.data?.error || error?.message);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
  };

  // Password validation rules
  const passwordValidations = [
    {
      id: "length",
      label: "At least 8 characters",
      isValid: password.length >= 8,
    },
    {
      id: "uppercase",
      label: "At least 1 uppercase letter",
      isValid: /[A-Z]/.test(password),
    },
    {
      id: "specialChar",
      label: "At least 1 special character",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

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
        {/* Email */}
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

        {/* First Name */}
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="firstName" className="text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="lastName" className="text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
            />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Password */}
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
                onChange={(e) => setPassword(e.target.value)}
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
          <div className="pl-2 mt-[5px] text-xs text-[rgba(88,97,103,0.4)]">
            <ul className="list-disc pl-5 mt-1">
              {passwordValidations.map((validation) => (
                <li
                  key={validation.id}
                  className={
                    validation.isValid ? "text-green-500" : "text-gray-400"
                  }
                >
                  {validation.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="phone" className="text-gray-600 mb-1">
              Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="NG"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={onChange}
                  className="border rounded-[.25rem] h-10 px-3 text-sm focus:outline-none [&>input]:bg-transparent [&>input]:px-1 [&>input]:outline-0 [&>input]:h-full [&>input]:text-black"
                />
              )}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="address" className="text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-[30px]">
          <div className="relative flex flex-col w-full group">
            <label htmlFor="gender" className="text-gray-600 mb-1">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender")}
              className="w-full border text-sm leading-[1.5] text-[#212529] rounded-[.25rem] transition-[bordercolor_0.15s_ease-in-out] px-3 py-[0.375rem] focus:outline-0 focus:border-primary"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="">
          <Button
            size={"lg"}
            type="submit"
            className="w-full mb-4 text-sm cursor-pointer"
            disabled={signupMutation.isPending}
          >
            {signupMutation.isPending && <LoadingSpinner className="mr-1" />}
            Sign Up
          </Button>
        </div>

        {/* Sign In Link */}
        <div className="flex mb-[30px] items-center justify-center gap-6">
          <label className="block mb-0 text-gray-500">
            Already have an account?
          </label>
          <Link
            to="/auth/login"
            className="text-primary hover:underline hover:underline-offset-2"
          >
            Sign In
          </Link>
        </div>
      </form>

      {/* "Or" Divider */}
      <div className="relative flex items-center justify-center my-8">
        <hr className="w-1/2 border-t border-gray-300" />
        <span className="absolute bg-white px-4 text-gray-500">or</span>
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-col items-center">
        <p className="mb-4 text-gray-600">Sign up with:</p>

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
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
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

export default SignUpForm;
