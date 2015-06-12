$(document).ready(function(){
    $(document.body).css('padding-top', $('.navbar-default').height());
    $(window).resize(function(){
        $(document.body).css('padding-top', $('.navbar-default').height());
    });
    $('.navbar-toggle').on('click', function() {
        $(document.body).css('padding-top', $('.navbar-default').height() - $('.navbar-collapse').height()); 
    });
});