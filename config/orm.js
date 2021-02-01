var connection = require ("/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES ?";

        console.log(queryString);

        connection.query(queryString, table, cols, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: function()
}




module.exports = orm;