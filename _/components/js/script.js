$(document).ready(function(){
    
    //Smooth scrolling
    $('.scroll').click(function(event){		
		    event.preventDefault();
		    $('body, html').animate({ scrollTop:$($(this).attr('href')).offset().top - $('.navbar').height() - 1 }, 1000);
    });    
    

    //MAIN - BOOK SHELF
    
    var x1, x2, x3, y1, y2, imagePositions, horizDist, vertDist, koef, bookHeight, movingPosStart, movingPosStop;
    
    //Generates random distance
    function randomDist(distance) {
        return Math.floor(Math.random() * distance);
    } //end function randomDist
            
    //Generates initial conditions for books in book_shelf
    function initialConditions() {
        x1 = -20; //starting position for first column of images
        x2 = 475; //starting position for second column of images
        x3 = 950; //starting position for third column of images
        y1 = -15; //starting position for first row of images
        y2 = 350; //starting position for second row of images
        horizDist = 100; //horizontal span where image can be placed
        vertDist = 50; //vertical span where image can be placed
        imagePositions = [
            [x1 + randomDist(horizDist), y1 + randomDist(vertDist)],
            [x2 + randomDist(horizDist), y1 + randomDist(vertDist)],
            [x3 + randomDist(horizDist), y1 + randomDist(vertDist)],
            [x1 + randomDist(horizDist), y2 + randomDist(vertDist)],
            [x2 + randomDist(horizDist), y2 + randomDist(vertDist)],
            [x3 + randomDist(horizDist), y2 + randomDist(vertDist)]
        ]; //array of positions for book images
    }
    
    var $book = $('#book_shelf .book');
    
    //Creates starting point properties for book_shelf
    function bookShelfProperties() {
        koef = window.innerWidth / 1440;
        //Book_shelf height
        $('#book_shelf').css('height', Math.floor(window.innerWidth / 1.95));
        //Height of books in book_shelf
        bookHeight = Math.floor(350 * koef);
        $book.css('height', bookHeight).
            css('left', function(index) { return Math.floor(imagePositions[index][0] * koef) + 'px'; }).
            css('top', function(index) { return Math.floor(imagePositions[index][1] * koef) + 'px'; });
    } //end startingPoint
    
    //Spreads books to their positions
    function spreadBooksOnTable() {
        $book.each(function(){
            $book.
            css('left', function(index) { return Math.floor(imagePositions[index][0] * koef) + 'px'; }).
            css('top', function(index) { return Math.floor(imagePositions[index][1] * koef) + 'px'; });
        }); //end each
    } //end spreadBooksOnTable
    
    movingPosStart = [
        [-350, -200],
        [725, -350], 
        [1440, 200],
        [-350, 150],
        [275, 740], 
        [1440, 550]
    ];
  
    movingPosStop = [
        [-75, -100],
        [625, -75], 
        [1125, 100],
        [-75, 250],
        [375, 450], 
        [1125, 450]
    ];
    
    //Sets pointers to their positions
    function setHands() {
        $('.pointer').css('width', 350 * koef).css('height', 350 * koef);
        $('#hand_pointer0').css('left', movingPosStart[0][0] * koef).css('top', movingPosStart[0][1] * koef);
        $('#hand_pointer1').css('left', movingPosStart[1][0] * koef).css('top', movingPosStart[1][1] * koef);
        $('#hand_pointer2').css('left', movingPosStart[2][0] * koef).css('top', movingPosStart[2][1] * koef);
        $('#hand_pointer3').css('left', movingPosStart[3][0] * koef).css('top', movingPosStart[3][1] * koef);
        $('#hand_pointer4').css('left', movingPosStart[4][0] * koef).css('top', movingPosStart[4][1] * koef);
        $('#hand_pointer5').css('left', movingPosStart[5][0] * koef).css('top', movingPosStart[5][1] * koef);
    } //end setPointers
    
    initialConditions();
    bookShelfProperties();
    spreadBooksOnTable();
    setHands();
    
    //Moves hand on hovered book
    $book.hover(
        function(){
            $book.css('z-index', '1');
            $(this).css('z-index', '2');
            var index = $book.index(this);
            $('#hand_pointer' + index).stop().animate({
                left: movingPosStop[index][0] * koef,
                top: movingPosStop[index][1] * koef
            }, 1000);
        },
        function(){
            var index = $book.index(this);
            $('#hand_pointer' + index).stop().animate({
                left: movingPosStart[index][0] * koef,
                top: movingPosStart[index][1] * koef
            }, 1000);
        }
    ); //end hover
    
    $(window).resize(function(){
        
        bookShelfProperties();
        spreadBooksOnTable();
        setHands();
        
    }); //end resize
    
    
    //MAIN - PICK BOOKS
    
    $('.image_list').hover(function(){
        $(this).toggleClass('hovered'); 
    }); //end hover
    
    var html = '<span class="fa-stack fa-2x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x fa-inverse"></i></span>';
    $('#slide_content .image_list').append(html);
    
    $('.image_list').click(function() {
        var index = $('.image_list').index(this);
        function complete(index, dataJson){
            $('#book_info h1').html(dataJson[index].h1);
            $('#book_info h4').html(dataJson[index].h4);
            $('#book_info #img').html(dataJson[index].image);
            $('#book_info #ed_top').html(dataJson[index].top);
            $('#book_info #ed_bottom').html(dataJson[index].bottom);
            $('#book_info blockquote').html(dataJson[index].blockquote);
            $('#book_info p').html(dataJson[index].p);
        }
        $('#book_info').fadeOut(250, function(){
            complete(index, dataJson);
        }).fadeIn(250);
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