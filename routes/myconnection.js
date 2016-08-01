
var mysql = require("mysql2");
var connection = mysql.createConnection({
    host : 'ja-cdbr-azure-west-a.cloudapp.net',
    user : 'b5df9e16ecc0d7',
    password : '6e9f49a2',
    port : 3306 ,
    database : 'feedtank'
  });
module.exports = connection;
