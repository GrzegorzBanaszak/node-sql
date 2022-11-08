import mysql from "mysql2/promise";
import config from "../config";

const conn = mysql.createConnection(config.db);

export default conn;
