/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormData } from "@/components/auth/LoginForm";
import instance from "@/services/axios";

// Handle responses and errors
const handleResponse = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(response.data.message || "Request failed");
};

const handleError = (error: any) => {
  if (error.response) {
    throw new Error(error.response.data || "Request failed");
  } else if (error.request) {
    throw new Error("No response received from the server");
  } else {
    throw new Error(error.message || "Request failed");
  }
};

// export const signUpUser = async (data: SignUpFormData) => {
//   const res = await instance.post(`/auth/sign-up`, data);
//   return res.data;
// };

export const loginUser = async (data: LoginFormData) => {
  try {
    const res = await instance.post(`/auth/login`, data);
    return handleResponse(res);
  } catch (error) {
    handleError(error);
  }
};
