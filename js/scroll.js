/*top*/
$( document ).ready(function() { 
$('.back').click(function(){
    $("html, body, #main").animate({ scrollTop: 0 }, 'slow');
      return false;
}); 
});

/*links*/
$( document ).ready(function() { 
 var $doc = $('html, body');
$('.scroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});  
});

/*pin tatu*/
$( document ).ready(function() { 
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
});

/*maps*/
$(document).ready(function () {
    
    $('.map').click(function () {
        $('.map iframe').css("pointer-events", "auto");
    });
    
    $( ".map" ).mouseleave(function() {
      $('.map iframe').css("pointer-events", "none"); 
    });
});

/*imagens*/
$( document ).ready(function() { 
window.sr = ScrollReveal({ reset: true });
window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');
});


/* */
$( document ).ready(function() { 
    $('.tempos').hide();  
    
    $('input[type="checkbox"]').click(function () {
        $('.tempos').hide();     
    
        if ($('#alvorada').is(':checked') && $('#galeao').is(':checked')) {
            $('#viagem1').show(500);
            $(window).scrollTop($('#viagem1').offset().top);
        }
        if ($('#meier').is(':checked') && $('#antero_de_quental').is(':checked')) { 
            $('#viagem2').show(500);
            $(window).scrollTop($('#viagem2').offset().top);
        }
        if ($('#carioca').is(':checked') && $('#jansen_de_mello').is(':checked')) {
             $('#viagem3').show(500);
             $(window).scrollTop($('#viagem3').offset().top);
        }
        if ($('#galeao').is(':checked') && $('#santos_dumont').is(':checked')) {
            $('#viagem4').show(500);
            $(window).scrollTop($('#viagem4').offset().top);
        }
    });
    })
