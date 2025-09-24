import type { UserRole } from "@/types";
import React, { type FC } from "react";
import { Navigate } from "react-router";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: UserRole;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, role }) => {
  if (role !== "Admin") {
    toast.error("Access is not permitted");
    return <Navigate to="/auth/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
