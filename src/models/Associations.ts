import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserList } from "../types";
import List from "./ListM";
import User from "./UserM";

@Table
export default class UserLists extends Model<UserList> {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => List)
  @Column
  listId!: number;
}
