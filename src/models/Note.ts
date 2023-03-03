import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { User } from "./User";
import { Associations } from "./Associations";

@Table
export class Note extends Model<Note> {
  @PrimaryKey
  @Column
  id!: number;

  @Unique
  @Column
  title!: string;

  @Column
  content!: string;

  @BelongsToMany(() => User, () => Associations)
  users!: User[];

  @ForeignKey(() => User)
  @Column
  authorId!: number;

  @BelongsTo(() => User)
  author!: User;
}
