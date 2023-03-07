import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { User } from "./User";

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

  @ForeignKey(() => User)
  @Column
  authorId!: number;

  @BelongsTo(() => User)
  author!: User;
}
