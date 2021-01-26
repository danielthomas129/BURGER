// Set up MySQL connection.
const mysql = require("mysql");
//const connection;
const config = require("./config.json");
const server = require("../server.js");
// const JAWSDB_URL = "mysql://uokyn4b6ncq83xk2:xtv6rw9ufobbz9l1@lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zbzml6pe5m4qz5lq"

 if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);

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

module.exports = connection;