/*$(function(){
    
});*/
$('#box').css("background-color", "purple");
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
