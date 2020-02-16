$(document).ready(function(){

  // hide feed restore button until a post is active
  $("#feed-restore").hide();

  // if clicking a post from feed, hide feed and load post
  $(".post").click(function(event){
    console.log('Hide feed!');
    $("#posts").hide();
    $("#recent").hide();
    $("#feed-restore").show();
    var postid = $(this).attr('id');
    console.log(postid);
  });

  $("#feed-restore").click(function(event){
    console.log('Show feed!');
    $("#posts").show();
    $("#recent").show();
    $("#feed-restore").hide();
  });

});
