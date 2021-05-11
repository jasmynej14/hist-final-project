$(document).ready(function(){
 $(".welcome").hide()
   $(".theme-night").hide()
   $(".order-food").hide()
   $(".music").hide()
   $(".ending").hide()
  welcome_box = $(".welcome")
  theme_night = $(".theme-night")
  order_food = $(".order-food")
  music  = $(".music")
  ending = $(".ending")

  var today = new Date()

  $("#start-button").click(function(){
    $(".get-info").hide()
   //alert("kisss my ass")
   $(".get-info").hide()
   //$(".welcome").show()
   //$(".welcome_box").html(welcome_box)
   //$(".welcome-header").append($("#name").val())
  });

 
  $("#enter-button").click(function(){
    alert("clicked")
    theme_night.show()
    var day = today.getDay() 
    var nights = ["Regular Dance Night","Ladies' Night","Regular Dance Night (400 Club)","Society Night","Kitchen Mechanic's Nights","Society Night","Square Night"]
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    $(".current-night").append(nights[day])
    $(".game").html(theme_night)
    

    
  });


})