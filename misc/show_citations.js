 $(document).ready(function(){  
    
       $.getJSON("../misc/citations.json",function(res){
            $.each(res,function(i,field){
                var citation_div = $("<div></div>",{"class":"citation"})
                var link = $("<a>View Source</a>")
                link.attr("href",field["link"])
                link.addClass("source_link")
                var padder = $("<div></div>",{"class":"p-4"})
                citation_div.append("<h2>"+field["title"]+"</h2>")
                citation_div.append( "<h2>"+field["author"]+"</h2>")
                citation_div.append(field["citation"])
                citation_div.append("<br/>")
                citation_div.append(link)
                $(".citations").append(citation_div)
                $(".citations").append(padder)
            })
       }
       );
   
 })