
var mysql = require("mysql2");
var config={
    host : 'ja-cdbr-azure-west-a.cloudapp.net',
    user : 'b5df9e16ecc0d7',
    password : '6e9f49a2',
    port : 3306 ,
    database : 'feedtank',
    multipleStatements: true
  };
var connection = mysql.createConnection(config);
connection.on("error",function(err){
      connection = mysql.createPool(config);
    });
module.exports = connection;
