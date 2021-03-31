changer = 1 ;

$(document).ready(function(){


    $("box .cell").on("click", function () {
        if (changer == 1) {
            $(this).text("X");
            changer = 0 ;
        }else{
            $(this).text("0");
            changer = 1 ;
        }
        
    });

    $(".game-restart").click(function () { 
        $(".cell").html(null);
        $("point1").text("0");
        $("point2").text("0") ;
    });

    function change_color(one,two,three) { 
        $(one+" .cell").css("background-color", "darkgrey");
        $(two+" .cell").css("background-color", "darkgrey");
        $(three+" .cell").css("background-color", "darkgrey");
        setTimeout(function(){
            $(one+" .cell").css("background-color", "");
            $(two+" .cell").css("background-color", "");
            $(three+" .cell").css("background-color", "");
            $(".cell").html(null);
        }, 1500);
     }

     function put_score(val) { 
         var player1 = +$("point1").text();
         var player2 = +$("point2").text();
         
         if (val == "X") {
            $("point1").text(player1+1);
            changer = 1 ;
         }else{
             $("point2").text(player2+1) ;
             changer = 0 ;
         }
      }
     $(".Clean").click(function () { 
        $(".cell").html(null);
     });
    
    $(".cell").click(function () { 
        var b1 = $( "#b1 .cell" ).text();
        var b2 = $( "#b2 .cell" ).text();
        var b3 = $( "#b3 .cell" ).text();
        var b4 = $( "#b4 .cell" ).text();
        var b5 = $( "#b5 .cell" ).text();
        var b6 = $( "#b6 .cell" ).text();
        var b7 = $( "#b7 .cell" ).text();
        var b8 = $( "#b8 .cell" ).text();
        var b9 = $( "#b9 .cell" ).text();

        if (b1+b2+b3=="XXX" || b1+b2+b3=="000") {

            change_color("#b1","#b2","#b3") ;
            put_score(b1) ;

        }else if(b4+b5+b6=="XXX" || b4+b5+b6=="000"){

            change_color("#b4","#b5","#b6") ;
            put_score(b4) ;

        }else if(b7+b8+b9=="XXX" || b7+b8+b9=="000"){

            change_color("#b7","#b8","#b9") ;
            put_score(b7) ;

        }else if(b1+b4+b7=="XXX" || b1+b4+b7=="000"){

            change_color("#b1","#b4","#b7") ;
            put_score(b1) ;

        }else if(b2+b5+b8=="XXX" || b2+b5+b8=="000"){

            change_color("#b2","#b5","#b8") ;
            put_score(b2) ;

        }else if(b3+b6+b9=="XXX" || b3+b6+b9=="000"){

            change_color("#b3","#b6","#b9") ;
            put_score(b3) ;

        }else if(b1+b5+b9=="XXX" || b1+b5+b9=="000"){

            change_color("#b1","#b5","#b9") ;
            put_score(b1) ;

        }else if(b7+b5+b3=="XXX" || b7+b5+b3=="000"){
            change_color("#b7","#b5","#b3") ;
            put_score(b7) ;

        }

    });

});