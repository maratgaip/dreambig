$( document ).ready(function() {
    $("#btn").click(function(e){
        $("#info").hide();
    });
});

$(document).keydown(function(e){

    // switch case
    switch(e.keyCode){
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break
    }
    return false;
});

function moveRight(){
    var pos = $('#snake').offset().left;
    $('#snake').css({left: pos + 10})
}

function moveLeft(){
    var pos = $('#snake').offset().left;
    $('#snake').css({left: pos - 10})
}
function moveUp(){
    var pos = $('#snake').offset().top;
    $('#snake').css({top: pos - 10})
}
function moveDown(){
    var pos = $('#snake').offset().top;
    $('#snake').css({top: pos + 10})
}