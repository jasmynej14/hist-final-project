$(document).ready(function(){
    //$(".info-body").hide()
    //$(".notable-body").hide()
    $(".info-header").click(function(){
        if($(".info-body").is(":visible")){
            $(".info-body").slideUp("slow")
        }
        else{
            $(".info-body").slideDown("slow")
        }
        
    })

    $(".notable-header").click(function(){
        if($(".notable-body").is(":visible")){
            $(".notable-body").slideUp("slow")
        }
        else{
            $(".notable-body").slideDown("slow")
        }
    })
})