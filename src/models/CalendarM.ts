import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { CalendarInter } from "../types";

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
}
