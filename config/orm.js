// Dependencies
// =============================================================
var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    var dbQuery = "SELECT * FROM burgers";
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(burger_name, cb) {
    var dbQuery = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(dbQuery, [burger_name], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(id, cb) {
    var dbQuery = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(dbQuery, [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;