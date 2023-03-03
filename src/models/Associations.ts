import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { User } from "./User";
import { Note } from "./Note";

@Table
export class Associations extends Model<Associations> {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Note)
  @Column
  noteId!: number;
}
