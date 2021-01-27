const express = require("express");
// Import the burger module to access database functions
const burger = require("../models/burger.js");

// The router is like using app = express(), where the server is defined in another file
let router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, function (result) {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = `id=${req.params.id}`;
    console.log(`Condition: ${condition}`);

    burger.updateOne("munched=true", condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
});
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;