import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
} from "sequelize-typescript";
import { User } from "./User";
import { List } from "./List";

@Table
export class UserList extends Model<UserList> {
  @PrimaryKey
  @Column
  id!: number;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => List)
  @Column
  listId!: number;
}
