import {baseApi} from '@/services/api'
import type { User } from '@/types';
import { logout, setCredentials } from './authSlice';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: User;
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
        query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
        }),
    }),
    refresh: builder.query<AuthResponse, void>({
        query: () => '/auth/refresh',
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
            try {
                const { data } = await queryFulfilled
                dispatch(setCredentials(data))
            } catch {
                dispatch(logout())
            }
        },
    })
    })
})

export const { useLoginMutation, useRegisterMutation, useRefreshQuery } = authApi;