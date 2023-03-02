import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";

dotenv.config();
const { USER, PASS, SERVER } = process.env;

const db = new Sequelize(`postgres://${USER}:${PASS}@${SERVER}/${USER}`, {
  native: false,
  logging: false,
  models: [__dirname + "/models"],
});

export default db;
