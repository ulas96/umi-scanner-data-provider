import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Transaction } from "./entities/Transaction";

dotenv.config();

export default new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Transaction],
  synchronize: true,
});
