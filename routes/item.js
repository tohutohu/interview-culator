var express = require('express');
var router = express.Router();
var connection=require('./myconnection');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var rank_query = 'SELECT * FROM feed ORDER BY pv DESC LIMIT 5; ';
  var query = rank_query + 'SELECT * FROM feed WHERE id = ' + req.params.id + ';';
  connection.getConnection(function(er,con){
    con.query(query,function(err,itemdetail){
      if(err) console.log(err);
      console.log(itemdetail[1].pv);
      res.render('item.html',{title:'インタビューキュレーター|'+itemdetail[1].title,item:itemdetail[1],rank:itemdetail[0]});
    });
    con.query('UPDATE feed SET pv = pv + 1 WHERE id = '+req.params.id+";");
    con.release();
  });
});

module.exports = router;

