"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv/config");
const sequelize_1 = require("sequelize");
const { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: +DB_PORT,
});
async function connect() {
    try {
        await exports.sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
connect();
