console.log("test");
$.ajax({

  url:'../api/relate-article',
  dataType: 'json',
  data:{
    url:entry,
    id:id,
  },
}).done(function(json){
  console.log(json);
  for(var i=0;i<json.length;i++){
    if(json[i].url == entry)continue;
    $("#relate-article").append('<div class="relate-article-box"><a class="relate-article-title" href="http://interview.to-hutohu.com/items/'+ json[i].id +'">'+json[i].title+'</a><div class="relate-article-description">'+json[i].sumally +'</div></div>');
  }
}).fail(function(json){
  console.log("だめです");  
});
