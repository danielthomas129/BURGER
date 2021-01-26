// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// const config = require("../config/config.json");
// const server = require("../server.js");
const JAWSDB_URL = "mysql://uokyn4b6ncq83xk2:xtv6rw9ufobbz9l1@lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zbzml6pe5m4qz5lq"

if (JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password12",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;