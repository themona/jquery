
$(document).ready(function(){
    $("#item1").click(function(){
        $("#para1").css("display","block");
        $("#para2").css("display","none");
        $("#para3").css("display","none");

        $("#i1").removeClass("fa fa-plus open");
        $("#i1").addClass("fa fa-minus close");
        $("#i2").removeClass("fa fa-plus close");
        $("#i2").addClass("fa fa-minus open");
        $("#i3").removeClass("fa fa-plus close");
        $("#i3").addClass("fa fa-minus open");
    });
    $("#item2").click(function(){
        $("#para1").css("display","none");
        $("#para2").css("display","block");
        $("#para3").css("display","none");

        $("#i2").removeClass("fa fa-plus open");
        $("#i2").addClass("fa fa-minus close");
        $("#i1").removeClass("fa fa-plus close");
        $("#i1").addClass("fa fa-minus open");
        $("#i3").removeClass("fa fa-plus close");
        $("#i3").addClass("fa fa-minus open");
    });
    $("#item3").click(function(){
        $("#para1").css("display","none");
        $("#para2").css("display","none");
        $("#para3").css("display","block");

        $("#i3").removeClass("fa fa-plus open");
        $("#i3").addClass("fa fa-minus close");
        $("#i1").removeClass("fa fa-plus close");
        $("#i1").addClass("fa fa-minus open");
        $("#i2").removeClass("fa fa-plus close");
        $("#i2").addClass("fa fa-minus open");
    });
});

