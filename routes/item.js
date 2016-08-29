var express = require('express');
var router = express.Router();
var connection=require('./myconnection');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var query = 'SELECT * FROM feed WHERE id = ' + req.params.id;
  connection.query(query,function(err,itemdetail){
    console.log(itemdetail);
    res.render('item.html',{title:'インタビューキュレーター',item:itemdetail});
  });
});

module.exports = router;

