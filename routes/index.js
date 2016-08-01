var express = require('express');
var router = express.Router();
var connection = require("./myconnection");
/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT * ,DATE_FORMAT(pubdate, \'%Y年%m月%d日 %k時%i分\') AS pubdate FROM feed';
  connection.query(query,function(err,rows){
    res.render('index', { title: 'Express',
                          items: rows});
  });
});

module.exports = router;

process.on('exit',function(){
  mysql.destroy();    
});
