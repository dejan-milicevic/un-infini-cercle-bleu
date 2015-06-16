$(document).ready(function(){
    
    $(document.body).css('padding-top', $('.navbar-default').height());
    $(window).resize(function(){
        $(document.body).css('padding-top', $('.navbar-default').height());
    });
    $('.navbar-toggle').on('click', function() {
        $(document.body).css('padding-top', $('.navbar-default').height() - $('.navbar-collapse').height()); 
    });
    
    $('div[data-type="parallax"]').each(function(){
        var $obj = $(this); 
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $obj.data('speed')); 
            // Put together our final background position
            var coords = '0 '+ yPos + 'px';
            // Move the background
            $obj.css('background-position', coords);
        }); //end scroll
    }); //end each  
    
});