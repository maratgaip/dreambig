
$(document).ready(function(){
    // change css
    $("#link").css( {
        "background-color":"red",
        "color": "yellow"
    } );

    // hides id link
    $("#link").click(
        function(){
            $("#link").hide();
        }
    )

    // hides class link4
    $(".link").click(
        function(){
            if( $(this).css("backgroundColor") == "rgb(0, 0, 255)" ) {
                $(this).css({
                    "color" : "orange",
                    "background-color": "pink"
                });
            } else {
                $(this).css({
                    "color" : "white",
                    "background-color": "rgb(0, 0, 255)"
                });
            }

        }
    )





});