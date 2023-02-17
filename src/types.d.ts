export type role = "Client" | "Admin";

export interface User {
  id: number;
  nickname: string;
  email: string;
  verifiedEmail: boolean;
  password: string;
  role: role;
  avatar: string;
}

export type ExposeUser = Pick<User, "nickname" | "avatar">;

export type SensitiveUser = Omit<User, "email" | "password">;
