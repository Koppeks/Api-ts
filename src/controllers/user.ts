import { SensitiveUser, User } from "../types";
import usersData from "./user.json";

const user: User[] = usersData as User[];

export const getUsers = (): User[] => {
  return user;
};

export const getSensitiveUser = (): SensitiveUser[] => {
  return user.map(({ id, nickname, verifiedEmail, role, avatar }) => {
    return {
      id,
      nickname,
      verifiedEmail,
      role,
      avatar,
    };
  });
};

export const addUsers = (): undefined => {
  return undefined;
};
