import { loginApi } from "@/services/loginApi";
import authReducer from "@/modules/AuthForm/authSlice/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "./errorLogger";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
