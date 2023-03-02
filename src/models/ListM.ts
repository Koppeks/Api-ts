import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
} from "sequelize-typescript";
import { ListInter } from "../types";
import UserLists from "./Associations";
import User from "./UserM";

@Table
export default class List extends Model<ListInter> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  title!: string;

  list!: {
    enumList: string[];
  };

  Tags!: {
    enumTags: string[];
  };

  Coments!: {
    enumComents: {
      idUserComent: number;
      userComent: string;
    };
  };

  @BelongsToMany(() => User, () => UserLists)
  users!: User[];
}
