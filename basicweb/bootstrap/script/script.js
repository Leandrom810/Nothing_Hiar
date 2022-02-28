/*$(function(){
    
});*/
//old
/*$('#box').css("background-color", "purple");
$('#box').delay(1000).slideUp().delay(1000).fadeOut();
$('h1, h2, h3').css("border", "solid 1px red");
$('#box').click(function(){
    alert("clicou em mim porque negão?");
});
$('#box p').blur(function(){
    if($(this)){
        $('#box').fadeIn();
    }
});
*/
//new
/*$("#box").hide().fadeIn(2000).animate({
    right: "-500px"
}, function(){

});

$("h1, h2, h3, h4").hide().css("position", "relative").text("I Know Your IP :)").delay(3000).fadeIn(1000).animate({
    right: "-500px"
}, function(){

});*/
//new UI
$(function(){
    $("#box").css("position", "relative").draggable().droppable({
        drop: function(){
            $(this).find('p').html("AAAAAAAAAAAAAAAAAAAAA");
        }
    });
    $(".dropBox").draggable();
    $(".lista").sortable();
    $("#lista").sortable({connectWith: "#lista2"})
    $("#accordion").accordion();
    $(".data").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
    
    });
});
