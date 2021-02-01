var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb (res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    update: function(objColVals, devoured, cb) {
        orm.update("burgers", objColVals, devoured, function(res) {
            cb(res);
        })
    },
    delete: function(devoured, cb) {
        orm.delete("burgers", devoured, function(res) {
            cb(res);
        })
    }
};

module.exports = burgers;