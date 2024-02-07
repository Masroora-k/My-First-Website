
$(document).ready(function(){
    var intro_button = $("#intro_button");
    var list_button = $("#list_button");

    var div1_intro = $("#div1_intro");
    var div2_list = $("#div2_list");

    intro_button.on('click', function(){
        div1_intro.show();
        div2_list.hide();
    });

    list_button.on('click', function(){
        div1_intro.hide();
        div2_list.show();
    });
});
