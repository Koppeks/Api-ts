import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "./UserM";

@Table
export default class Note extends Model {
  @PrimaryKey
  @Column
  idNote!: number;

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
