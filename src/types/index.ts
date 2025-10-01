export type UserRole = "User" | "Admin";

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: UserRole;
  wantsNotifications: boolean;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
