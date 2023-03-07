import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
  DataType,
} from "sequelize-typescript";
import { User } from "./User";
import { UserList } from "./UserList";

@Table
export class List extends Model<List> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  title!: string;

  list!: {
    enumList: string[];
  };

  tags!: {
    enumTags: string[];
  };

  @Column({
    type: DataType.ARRAY(DataType.JSON),
    defaultValue: [],
  })
  comments!: {
    idUserComent: number;
    userComent: string;
  }[];

  @BelongsToMany(() => User, () => UserList)
  users!: User[];
}
