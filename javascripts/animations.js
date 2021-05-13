$(document).ready(function(){
    //$(".info-body").hide()
    $(".notable-body").hide()
    //$(".bands-body").hide()
    $(".info-header").click(function(){
        $(".info-body").slideToggle("slow")
      
        
    })

    $(".notable-header").click(function(){
        $(".notable-body").slideToggle("slow")
      
    })

    $(".bands-header").click(function(){
        $(".bands-body").slideToggle("slow")
        
    })

    $(".people-header").click(function(){
        $(".people-body").slideToggle("slow")
       
    })

    $(".fess-h").click(function(){
        $(".fess-b").slideToggle("slow")
       
    })

    $(".chick-b").hide()
    $(".chick-h").click(function(){
        $(".chick-b").slideToggle("slow")
       
    })
    $(".count-b").hide()
    $(".count-h").click(function(){
        $(".count-b").slideToggle("slow")
        
    })
    $(".al-b").hide()
    $(".al-h").click(function(){
        $(".al-b").slideToggle("slow")
        
    })
})