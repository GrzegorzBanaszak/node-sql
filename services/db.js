const mysql = require("mysql2/promise");
const config = require("../config");

const conn = mysql.createConnection(config.db);

module.exports = { conn };
