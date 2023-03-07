import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  Unique,
  HasMany,
  BelongsToMany,
  HasOne,
} from "sequelize-typescript";
import { Note } from "./Note";
import { UserList } from "./UserList";
import { Role } from "../types";
import Calendar from "./Calendar";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  nickname!: string;

  @Unique
  @Column
  email!: string;

  @Default(false)
  @Column
  verifiedEmail!: boolean;

  @Column
  password!: string;

  @Column
  role!: Role;

  @Column
  avatar!: string;

  @HasMany(() => Note)
  notes!: Note[];

  @HasOne(() => Calendar)
  calendar!: Calendar;

  @BelongsToMany(() => User, () => UserList)
  users!: User[];
}
