$(document).ready(function(){
    $(".choose-outfit").hide();
  $("#start-button").click(function(){
    $(".game").html("<h1>Hello "+$("#name").val()+"</h1>")
  })
})