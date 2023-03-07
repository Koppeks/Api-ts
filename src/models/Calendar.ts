import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { CalendarInter } from "../types";
import { User } from "./User";

@Table
export default class Calendar extends Model<CalendarInter> {
  @PrimaryKey
  @Column
  id!: number;

  date!: {
    linkedDates: [
      {
        dateName: string;
        dates: string[];
      }
    ];
  };

  @ForeignKey(() => User)
  @Column
  authorId!: number;

  @BelongsTo(() => User)
  author!: User;
}
