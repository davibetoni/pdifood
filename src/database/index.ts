import "dotenv/config"
import { Sequelize } from "sequelize";

const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: +DB_PORT,
})

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();
