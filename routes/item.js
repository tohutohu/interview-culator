var express = require('express');
var router = express.Router();
var connection=require('./myconnection');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var rank_query = 'SELECT * FROM feed ORDER BY pv DESC LIMIT 5; ';
  var query = rank_query + 'SELECT * FROM feed WHERE id = ' + req.params.id + ';SELECT * FROM item WHERE id ='+ req.params.id + ";";
  connection.getConnection(function(er,con){
    con.query(query,function(err,itemdetail){
      if(err) console.log(err);
      if(!itemdetail[1][0]){
        res.status(404).send("そのページは存在しません");
        return;
      }
      if(itemdetail[2][0])
        res.render('item.html',{title:itemdetail[1][0].title+'｜インタビューキュレーター',i:itemdetail[1][0],rank:itemdetail[0],tags:itemdetail[2][0].tags.split(/\n/)});
      else
        res.render('item.html',{title:itemdetail[1][0].title+'｜インタビューキュレーター',i:itemdetail[1][0],rank:itemdetail[0],tags:[""]});
    });
    con.query('UPDATE feed SET pv = pv + 1 WHERE id = '+req.params.id+";");
    con.release();
  });
});

module.exports = router;

