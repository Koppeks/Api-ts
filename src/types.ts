//Users
export enum Role {
  Client = "client",
  Admin = "admin",
}

export interface UserInter {
  id: number;
  nickname: string;
  email: string;
  verifiedEmail: boolean;
  password: string;
  role: Role;
  avatar: string;
}

export type ExposeUser = Pick<UserInter, "nickname" | "avatar">;

export type NonSensitiveUser = Omit<UserInter, "email" | "password">;

export type AddNewUser = Omit<UserInter, "id" | "verifiedEmail" | "avatar">;

//List

export interface ListInter {
  id: number;
  title: string;
  list: object;
  coments: object;
  tag: object;
}

//Calendar

export interface CalendarInter {
  id: number;
  dates: object;
}

//Notes

export interface NoteInter {
  id: number;
  title: string;
  content: string;
}

// AssociationsModels

// export interface Associations {
//   idUser: number;
//   idNote: number;
//   idList: number;
//   idCalendar: number;
// }

// export type UserNote = Pick<Associations, "idUser" | "idNote">;

export interface UserList {
  idInterUser: number;
  idInterList: number;
}
