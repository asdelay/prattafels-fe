import { useRefreshQuery } from "@/modules/AuthForm/authApi";
import type { RootState } from "@/store/store";
import type { UserRole } from "@/types";
import React, { type FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, role }) => {
  const user = useSelector((state: RootState) => state.authSlice.user);
  const { isFetching, isError } = useRefreshQuery(undefined, {
    skip: !!user,
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!user || isError) {
    toast.error("You have to login");
    return <Navigate to="/auth/login" />;
  }

  if (role && user.role !== role) {
    toast.error("Access is not permitted");
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
