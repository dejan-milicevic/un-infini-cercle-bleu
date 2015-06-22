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
    
    $('#slide_content .image_list').hover(function(){
        $(this).toggleClass('hovered'); 
    });
    
    var html = '<span class="fa-stack fa-2x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x fa-inverse"></i></span>';
    $('#slide_content .image_list').append(html);
    
});