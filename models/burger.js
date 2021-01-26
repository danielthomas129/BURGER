// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (colNewVal, condition, cb) {
        orm.updateOne("burgers", colNewVal, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;