$(document).ready(function(){
    
    // BOOK SHELF
    var imagePositions, x1, x2, x3, y1, y2, horizDist, vertDist, koef, bookHeight;
    
    // book_shelf height
    $('#book_shelf').css('height', Math.floor(window.innerWidth / 1.95));
    
    koef = window.innerWidth / 1440;
    
    bookHeight = Math.floor(350 * koef);
    
    // height of books in book_shelf
    $('#book_shelf .book').css('height', bookHeight);
    
    var x1 = -20; //starting position for first column of images
    var x2 = 475; //starting position for second column of images
    var x3 = 950; //starting position for third column of images
    var y1 = -15; //starting position for first row of images
    var y2 = 350; //starting position for second row of images
    var horizDist = 100; //horizontal span where image can be placed
    var vertDist = 50; //vertical span where image can be placed
    
    function randomDist(distance) {
        return Math.floor(Math.random() * distance);
    } //end function randomDist
    
    imagePositions = [
        [x1 + randomDist(horizDist), y1 + randomDist(vertDist)],
        [x1 + randomDist(horizDist), y2 + randomDist(vertDist)],
        [x2 + randomDist(horizDist), y1 + randomDist(vertDist)],
        [x2 + randomDist(horizDist), y2 + randomDist(vertDist)],
        [x3 + randomDist(horizDist), y1 + randomDist(vertDist)],
        [x3 + randomDist(horizDist), y2 + randomDist(vertDist)]
    ]; //array of positions for book images
    
    var imagePositionsShuffled = _.shuffle(imagePositions); //shuffled array

    $('#book_shelf .book').each(function(){
        $('#book_shelf .book').css('left', function(index) {
            return Math.floor(imagePositionsShuffled[index][0] * koef) + 'px';
        }).css('top', function(index) {
            return Math.floor(imagePositionsShuffled[index][1] * koef) + 'px';
        });
    }); //end each
    
    function zIndex() {
        $('#book_shelf .book').each(function() {
            $(this).css('z-index', '1');
        }); //end each
    } // end zIndex
    
    $('#book_shelf .book').hover(function() {
        zIndex();
        $(this).css('z-index', '2');
    }); //end hover
    
    $(window).resize(function(){
        
        koef = window.innerWidth / 1440;
                     
        $('#book_shelf').css('height', Math.floor(window.innerWidth / 1.95));
        $('#book_shelf .book').css('height', Math.floor(350 * koef))
            .css('left', function(index) {
                return Math.floor(imagePositionsShuffled[index][0] * koef) + 'px';
            }).css('top', function(index) {
                return Math.floor(imagePositionsShuffled[index][1] * koef) + 'px';
            });

    }); //end resize
    
    console.log(dataJson); //dataJson is defined as global variable in index.html. It has content of JSON file.
    
    
    //MAIN - BOOK SHELF
    $('#book_shelf').mouseout(function(){
           	$('#custom_cursor').hide();
      	}); //end mouseout
    
    $('#book_shelf').mouseenter(function(){
        $('#custom_cursor').show();
    }); //end mouseenter
    
    $('#book_shelf').mousemove(function(e){
        $('#custom_cursor').css('left', e.pageX).css('top', e.pageY).css('display', 'block');
    }); //end mousemove
    
    
    //MAIN - PICK BOOKS
    
    $('.image_list').hover(function(){
        $(this).toggleClass('hovered'); 
    });
    
    var html = '<span class="fa-stack fa-2x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x fa-inverse"></i></span>';
    $('#slide_content .image_list').append(html);
    
    $('.image_list').click(function() {
        var index = $('.image_list').index(this);
        (function (index, dataJson) {
            $('#book_info h1').html(dataJson[index].h1);
            $('#book_info h4').html(dataJson[index].h4);
            $('#book_info #img').html(dataJson[index].image);
            $('#book_info #top').html(dataJson[index].top);
            $('#book_info #bottom').html(dataJson[index].bottom);
            $('#book_info blockquote').html(dataJson[index].blockquote);
            $('#book_info p').html(dataJson[index].p);
        })(index, dataJson);
    }); //end click
    
    
    //MAIN - PARALLAX
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