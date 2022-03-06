$(function(){
    $('#todoList ul').sortable({
        item: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            $(this).parent().parent().append('<li id="list-item">' + item + "</li>");
            $(this).val('');
        }
    });
});