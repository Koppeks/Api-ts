import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
  AllowNull,
  Unique,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { Role } from "../types";
import UserLists from "./Associations";
import List from "./ListM";
import Note from "./NoteM";

@Table({
  paranoid: true,
  timestamps: true,
})
export default class User extends Model {
  @PrimaryKey
  @Column
  idUser!: number;

  @AllowNull(false)
  @Column
  nickname!: string;

  @AllowNull(false)
  @Unique
  @Column
  email!: string;

  @AllowNull(false)
  @Default(false)
  @Column
  verifiedEmail!: boolean;

  @AllowNull(false)
  @Column
  password!: string;

  @Default("Client")
  @Column
  role!: Role;

  @Default(
    "https://imgs.search.brave.com/mLwlFyvqROQioiFE-Je_jZz2ip5Kp2jtfcxP8JlU5EM/rs:fit:415:415:1/g:ce/aHR0cDovL3d3dy40/eDQuZWMvb3Zlcmxh/bmRlY3VhZG9yL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L2RlZmF1bHQtdXNl/ci1pY29uLTguanBn"
  )
  @Column(DataType.TEXT)
  avatar!: string;

  @BelongsToMany(() => List, () => UserLists)
  lists!: List[];

  @HasMany(() => Note, "authorId")
  notes!: Note[];
}
