export type UserRole = "User" | "Admin";

export interface User {
  id: number;
  email: string;
  fullName: string;
  password: string;
  role: UserRole;
  wantsNotifications: boolean;
  avatarUrl?: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}
