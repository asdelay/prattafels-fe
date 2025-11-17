export type USER_ROLES = "STUDENT" | "ADMIN" | "TEACHER";

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: USER_ROLES;
  wantsNotifications: boolean;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Office {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
}

export interface Lesson {
  id: number;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  location: Office;
  attendees: User[];
}
