
$(window).ready(function(){
    //  SCROLL TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#back-top').stop().fadeIn(150);
        } else {
            $('#back-top').stop().fadeOut(150);
        }
    });
    $('#back-top').click(function () {
        $('body,html').stop().animate({scrollTop: 0}, 800);
    });

    //SLIDER
    slide({selector:'#sponsors .list-item',total:5}) ;
    // slide({selector:'#slider-home',total:1}) ;
    $('#about .right>.list-item>.item>.title>i').click(function(){
        $(this).parents('.item').toggleClass('active') ;
    });
    $('button[name="search"]').click(function(){
        var q = $.trim($(this).parents('form').find('input[name="q"]').val()) ;
            if(q === ''){
                alert('Vui lòng nhập dữ liệu !') ;
                return false ; 
            }
            else
                return true ;
    })
    $('input[name="subcribe"]').click(function(){
        var fullname = $.trim($(this).parents('form').find('input[name="fullname"]').val()) ;
        var email = $.trim($(this).parents('form').find('input[name="email"]').val()) ;
            if(fullname === '' || email === '' ){
                alert('Vui lòng nhập đầy đủ dữ liệu !') ;
                return false ; 
            }
            else
                return true ;
    })
    $('#update-new .item>.thumb').on( "mousemove", function(e) {
        var width = $(this).innerWidth() ;
        var height = $(this).outerHeight() ;
        $(this).css('width',width) ;
        $(this).children('img').addClass('zoom') ;
        var offset = $(this).offset() ;
        var x = ( e.pageX - parseInt(offset.left) - 50 ) ;
        var y = ( e.pageY - parseInt(offset.top) - 50 ) ;
        var cusor = $(this).find('.cusor') ;
            cusor.css('display','block') ;
            cusor.css('top',y+'px') ;
            cusor.css('left',x+'px') ;
            height *=3 ;
            width *=3 ;
            x *=3 ;
            y *=3 ;
            var img_zoom = $(this).nextAll('.img-zoom') ;
                if(img_zoom.innerWidth()+img_zoom.offset().left > $(window).innerWidth()){
                    img_zoom.css('right','120%') ;
                }
                img_zoom.css('display','block') ;
                img_zoom.find('img').width(width).height(height) ;
            if(y < height/2 ){
                img_zoom.find('img').css('top','-'+y) ;                
            }
            if(x < width/2 ){
                img_zoom.find('img').css('left','-'+x) ;
            }
    });
    $('#update-new .item>.thumb').mouseout(function(){
        $(this).find('.cusor').css('display','none') ;
        $(this).nextAll('.img-zoom').css('display','none') ;
    })
}) ;
    var v_loop = null ;
    // Vòng lặp slider
    function loop(obj){
        var ready = obj.selector.find('.ready').val() ;
                v_loop = setInterval(function(){
            var location = parseInt(obj.selector.find('.location').val()) ;
            var scrollLeft = 0 ;
                if(location <= obj.total_element ){
                    scrollLeft = '-'+location * obj.width ;
                    location += 1 ;
                }else{
                    location = 1 ;
                }
                obj.selector.children('.wrapper').css('left',scrollLeft);
                obj.selector.find('.location').val(location) ;
            },2500);   
    }
    function slide(obj){
        var selector = $(obj.selector) ;
        var total = obj.total ;
        var width = selector.width() / total ;
        var qty_child = selector.children('li').length - total ;
        if(qty_child > 0 ){
            var max_width = selector.children('li').length * width ;
            selector.children('li').css('width',width) ;
            var html = '<div class="wrapper clearfix"><input type="hidden" class="location" value="1"><input type="hidden" class="ready" value="true"><input type="hidden" class="total_element" value="'+qty_child+'">'+selector.html()+'</div>';
                selector.html(html) ;
                // alert(html);
                selector.addClass('slide') ;
                selector.children('.wrapper').css('width',max_width) ;  
                selector.css('height',selector.height()) ;
                selector.children('.wrapper').css('position','absolute') ; 
                obj = {selector:selector,total_element: qty_child,width: width } ;
                loop(obj) ;
            // Hover slider
            selector.find('.item').hover(function(){
                clearInterval(v_loop) ;    
            },function(){
                loop({selector:selector,total_element: qty_child,width: width }) ;
            }) ;
    // Next, back slider
    $('body').on('click','.next,.back',function (){
        clearInterval(v_loop) ;
        var selector = $(this).parents('.navigation').prevAll('.list-item') ;
        var location = parseInt(selector.find('.location').val()) ;
        var width = parseInt(selector.find('.item').innerWidth()) ;
        var total_element = parseInt(selector.find('.total_element').val()) ;
        var scrollLeft = 0 ;
            if($(this).hasClass('next')){
                if(location <= total_element ){
                    scrollLeft = '-'+location * width ;
                    location += 1 ;
                }else{
                    location = 1 ;
                }
            }else{
                if(location > 1){
                    location -= 1 ;
                    scrollLeft = '-'+(location * width - width) ;
                }
            }    
            selector.children('.wrapper').css('left',scrollLeft);
            selector.find('.location').val(location) ;
            loop(obj) ;
    });

        }
           
}
    
