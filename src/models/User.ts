import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  Unique,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Note } from "./Note";
import { Associations } from "./Associations";
import { Role } from "../types";

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

  @BelongsToMany(() => User, () => Associations)
  users!: User[];
}
