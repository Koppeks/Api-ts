import { AddNewUser, NonSensitiveUser, UserInter } from "../types";
import usersData from "./db_user.json";

const users: UserInter[] = usersData as UserInter[];

export const getUsers = (): UserInter[] => {
  return users;
};

export const getUserById = (id: number): NonSensitiveUser | undefined => {
  const userFind = users.find((u) => u.id === id);
  if (userFind !== undefined) {
    const { email, password, ...restUser } = userFind;
    return restUser;
  }
  return undefined;
};

export const getNonSensitiveUser = (): NonSensitiveUser[] => {
  return users.map(({ id, nickname, verifiedEmail, role, avatar }) => {
    return {
      id,
      nickname,
      verifiedEmail,
      role,
      avatar,
    };
  });
};

export const addUsers = (newAddedUser: AddNewUser): UserInter => {
  const newUser = {
    id: Math.max(...users.map((u) => u.id)) + 1,
    verifiedEmail: false,
    avatar:
      "https://imgs.search.brave.com/mLwlFyvqROQioiFE-Je_jZz2ip5Kp2jtfcxP8JlU5EM/rs:fit:415:415:1/g:ce/aHR0cDovL3d3dy40/eDQuZWMvb3Zlcmxh/bmRlY3VhZG9yL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L2RlZmF1bHQtdXNl/ci1pY29uLTguanBn",
    ...newAddedUser,
  };
  users.push(newUser);
  return newUser;
};
