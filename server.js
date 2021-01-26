const express = require('express');
// const connection = require("./config/connection.js");
// const config = require("./config/config.json")
// const server = require("./server.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Timeout
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
  if(!req.timedout) next();
}

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
