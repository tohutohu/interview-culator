var express = require('express');
var router = express.Router();
var connection = require("./myconnection");
var url = require("url");
/* GET home page. */
router.get('/', function(req, res, next) {
  var page = req.query.p;
  if(page==null || page=="0"){
    page=1;
  }
  page = parseInt(page);
  console.log(page);
  var rank_query = 'SELECT * FROM feed ORDER BY pv DESC LIMIT 5; ';
  var query = rank_query + 'SELECT * ,DATE_FORMAT(pubdate, \'%Y年%m月%d日 %k時%i分\') AS pubdate FROM feed ORDER BY pubdate DESC LIMIT '+(page-1)*15 +', 15;';
  connection.query(query,function(err,rows){
    console.log(rows);
    res.render('index.html', { title: 'Express',items: rows[1],page: page,rank:rows[0]});
  });
});

module.exports = router;

process.on('exit',function(){
  mysql.destroy();    
});
