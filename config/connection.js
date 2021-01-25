// Set up MySQL connection.
const mysql = require("mysql");
const connection;
const JAWSDB_string = "mysql://uokyn4b6ncq83xk2:xtv6rw9ufobbz9l1@lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zbzml6pe5m4qz5lq"
// if (process.env.JAWSDB_URL) {

if (JAWSDB_string) {
  connection = mysql.createConnection(JAWSDB_string);
} else {
  connection = mysql.createConnection({
    host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "uokyn4b6ncq83xk2",
    password: "xtv6rw9ufobbz9l1",
    database: "zbzml6pe5m4qz5lq"
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