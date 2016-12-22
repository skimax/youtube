$(document).ready(function() {
 $(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params =  {
    q: searchTerm,
    part: 'snippet',
     key:'AIzaSyARbnwWzlDEzVxyApSOX93TMuYiMub6BVE'


  };
 url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    showResults(data.items);
    console.log(data)
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,item){
    var reki = item.snippet.thumbnails.medium.url;
    var max = item.snippet.title;
    var youtube = 'https://www.youtube.com/watch?v='+item.id.videoId;
      
    html += "<a href= '"+ youtube + "' '"+ max + "'><img img-responsive src='"+ reki + "'/></a>"


    console.log(reki);
  });
  $('#search-results').append(html);
}
});