var scroll = function() {
    if ($("body").scrollTop() > 0.4 * $(window).height()) {
        $('.dropdown-content').css("background-color", "rgba(0,0,0,0.5)");
        $('#navibar').css("position", "fixed");
        $('#navibar').css("background-color", "rgba(0,0,0,0.9)");
        $('#navibar').css("box-shadow", "0px 0px 1px rgba(0,0,0,0.2)");
        $('#navibar').css("height", "48px");
        $('#bar').css("padding-top", "0");
        /*$('.bar').css("width","80%");*/
        $('#bar').css("letter-spacing", "1px");
        $('#bar').css("width", "96%");
        $('#logo').css("background-size", "100%");
        $('#godownbtn').css("opacity", "0");
    } else {
        $('.dropdown-content').css("background-color", "rgba(255, 255, 255, 0.1)");
        $('#navibar').css("position", "absolute");
        $('#navibar').css("background", "none");
        $('#navibar').css("box-shadow", "0px 0px 1px rgba(0,0,0,0)");
        $('#navibar').css("height", "160px");
        $('#bar').css("padding-top", "110px");
        /*$('.bar').css("width","70%");*/
        $('#bar').css("letter-spacing", "2px");
        $('#bar').css("width", "80%");
        $('#logo').css("background-size", "100%");
        $('#godownbtn').css("opacity", "1");
    }
};