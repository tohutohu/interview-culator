var express = require('express');
var router = express.Router();
var mysql = require("mysql2");
var connection = mysql.createConnection({
    host : 'ja-cdbr-azure-west-a.cloudapp.net',
    user : 'b5df9e16ecc0d7',
    password : '6e9f49a2',
    port : 3306 ,
    database : 'feedtank'
  });
/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM feed';
  connection.query(query,function(err,rows){
    res.render('index', { title: 'Express',
                          items: rows});
  });
});

module.exports = router;

process.on('exit',function(){
  mysql.destroy();    
});
