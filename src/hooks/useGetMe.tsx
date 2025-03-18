import { fetchUser } from "@/lib/api/auth";
import {
  setError,
  setLoading,
  setUser,
} from "@/store/features/auth/auth.slice";
import { useAppDispatch } from "@/store/hooks";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetMe = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["getMe"], // Unique key for caching
    queryFn: fetchUser, // Function to fetch data
    staleTime: 1000 * 60 * 5,
  });

  console.log("get user>>>", data);

  useEffect(() => {
    if (data) {
      // Update Redux store with the fetched user data
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    // Update Redux store with the loading state
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isError) {
      // Update Redux store with the error
      dispatch(setError(error?.message || "An error occurred"));
    }
  }, [isError, error, dispatch]);
  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
