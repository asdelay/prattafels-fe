import type { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
}

interface Credentials {
  user: User;
  accessToken: string
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {...action.payload};
    },
    setCredentials: (state, action: PayloadAction<Credentials>) => {
      state.accessToken = action.payload.accessToken;
      state.user = {...action.payload.user}
    }
  },
});
export const { setAccessToken, logout, setUser, setCredentials } = authSlice.actions;

export default authSlice.reducer;
