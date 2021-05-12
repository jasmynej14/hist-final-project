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
   $(".welcome-header").append($("#name").val())
   //$(".welcome").show()
   $(".welcome").fadeIn("slow")
   //$(".welcome_box").html(welcome_box)
   
  });

 
   $("#enter-button").click(function(){
     welcome_box.hide()
    theme_night.slideDown("slow")
    var day = today.getDay() 
     var nights = ["Regular Dance Night","Ladies' Night","Regular Dance Night (400 Club)","Society Night","Kitchen Mechanic's Nights","Society Night","Square Night"]
     var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     $(".current-night").append(nights[day]+" ("+days[day]+")")
    //$(".game").html(theme_night)
  });

  $("#start-food").click(function(){ //show order food
    theme_night.hide()
    order_food.show()
  })

  $("#order-food").click(function(){ //show music
    var drink = $("#drinks").val()
    var sandwich = $("#sandwiches").val()
    var salad = $("#salad").val()
    order_food.hide()
    $(".food-result").append(drink)
    $(".food-result").append(sandwich)
    $(".food-result").append(salad)
    music.show()
  })
 
  $("#end-button").click(function(){
    music.hide()
    ending.show()
  })
  
  $("#start-over").click(function(){
    ending.hide()
    $(".get-info").show()
  })
})