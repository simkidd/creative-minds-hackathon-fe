import { IUser } from "@/interfaces/user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  accountType: "user" | "teacher";
}

export const SLICE_NAME = "auth";

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  accountType: "teacher",
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setAccountType: (state, action: PayloadAction<"user" | "teacher">) => {
      state.accountType = action.payload;
    },
    resetAuthState: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.accountType = "teacher";
    },
  },
});

export const {
  setUser,
  setToken,
  setLoading,
  setError,
  resetAuthState,
  setAccountType,
} = authSlice.actions;

export default authSlice.reducer;
