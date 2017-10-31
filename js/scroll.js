 /*top*/
 $('.back').click(function(){
    $("html, body, #main").animate({ scrollTop: 0 }, 'slow');
      return false;
}); 

/*links*/
 var $doc = $('html, body');
$('.scroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});  


/*pin tatu*/
jQuery(document).ready(function($) {
    
    offset = $('#pin').offset();
    var fromtop = offset.top;
    var bottom = $('#pin').parent().offset().top + $('#pin').parent().height();

    $(document).scroll(function() {
        doc = $(this);
        dist = $(this).scrollTop();

        if (dist >= fromtop && dist <=  bottom) {
            $('#pin:last').show();
            $('#pin:first').css({
                'position': 'fixed'
            });
        } else {
            $('#pin').css({
                'position': 'static'
            });
        }
    });

});

/*maps*/
$( document ).ready(function() {      
    $(".click").click(function() {  
        $(this).removeClass("overlay maptext");
    });   
});

/*imagens*/
window.sr = ScrollReveal({ reset: true });
window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');
