var express = require('express');
var router = express.Router();
var connection = require('./myconnection.js');
var URL = require('url');

router.get('/',function(req,res,next){
  res.send("aaa");
});
router.get('/relate-article',function(req,res,next){
  var id = req.query.id;
  var domain = URL.parse(req.query.url).hostname;

  console.log(domain);
  connection.getConnection(function(er,con){
    if(er){

      res.json({result:false});
      con.release();
      return;
    }
    con.query("SELECT * FROM feed WHERE url LIKE ? LIMIT 4","%"+domain+"%",function(err,json){    
      console.log(json);
      res.json(json);
      con.release();
    });
  });
});

module.exports = router;
