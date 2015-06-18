$(document).ready(function(){
    
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
    
    $('#slide_content img').hover(function(){
       $(this).parent().parent().toggleClass('hovered'); 
    });
    
});