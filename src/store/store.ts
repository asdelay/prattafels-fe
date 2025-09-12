import { baseApi } from "@/services/loginApi";
import authReducer from "@/modules/AuthForm/authSlice/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { rtkQueryErrorLogger } from "./errorLogger";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
