var connection = require("../config/connection.js");

var orm = {
selectAll: function(tableInput, callbackfn){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString,function(err,result){
        if (err) throw err;
        callbackfn(result);
    })
},

insertOne: function(table,cols,vals,callbackfn){
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals.length;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err,result){
        if (err) throw err;
        callbackfn(result);
    })
},

updateOne: function(table, objColVals, condition, callbackfn) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callbackfn(result);
    });
  }

}

module.exports = orm;
