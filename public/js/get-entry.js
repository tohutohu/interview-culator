//Ajax通信
$.ajax({
  url: 'http://b.hatena.ne.jp/entry/jsonlite/?url=' + encodeURIComponent( entry ) ,
  dataType: 'jsonp' ,

  success:function( obj )
  {
    // 各情報
    var title = obj.title ;// タイトル
    var url = obj.url ;// URL
    var id = obj.eid ;// エントリーID
    var img = obj.screenshot ;// スクリーンショット画像のURL
    var page = obj.entry_url ;// はてブコメント欄のURL
     
    // [id=result]の要素内に出力
    //$( '#item-detail' ).prepend( '<img class="site-screenshot" src="' + img + '">' ) ;
     
    //個々のブクマ(コメント)を取得していく
    for( var i=0 , l=obj.bookmarks.length ; l > i ; i++ )
    {
      var user = obj.bookmarks[i].user ;// ユーザーID
      var icon = 'http://cdn1.www.st-hatena.com/users/' + user.substr( 0 , 2 ) + '/' + user + '/profile.gif' ;// アイコン
      var com = obj.bookmarks[i].comment ;// コメント
      var date = obj.bookmarks[i].timestamp ;// ブクマした日付
      var tags = obj.bookmarks[i].tags.join( ',' ) ;// タグ一覧

      if(com == "")continue;
       
      //出力
      $( '#result' ).append( '<p class="comment-box clearfix"><a href="http://b.hatena.ne.jp/' + user +'/bookmark"><img class="comment-icon" src="' + icon + '"><span class="comment-user">' + user + '</span></a><span class="comment"> ' + com + '</span></p>' ) ;
    }
     
  },
    
  error:function()
  {
    alert( '通信に失敗しました…。' ) ;
  } ,
    
  complete:function()
  {
    return false;
  }
});
