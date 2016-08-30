var express = require('express');
var router = express.Router();
var connection=require('./myconnection');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var rank_query = 'SELECT * FROM feed ORDER BY pv DESC LIMIT 5; ';
  var query = rank_query + 'SELECT * FROM feed WHERE id = ' + req.params.id;
  connection.connect();
  connection.query(query,function(err,itemdetail){
    console.log(itemdetail[1].pv);
    res.render('item.html',{title:'インタビューキュレーター',item:itemdetail[1],rank:itemdetail[0]});
  });
  connection.query('UPDATE feed SET pv = pv + 1 WHERE id = '+req.params.id+";");
  connection.end();
});

module.exports = router;

