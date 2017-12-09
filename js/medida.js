function mediaSize() { 
  /* Set the matchMedia */
  if (window.matchMedia('(min-width: 768px)').matches) {
  /* Changes when we reach the min-width  */
  $(function() {
    $('.video-desktop').removeClass('hide');
    $('.video-mobile').addClass('hide');
  })

} else {
  /* Reset for CSS changes – Still need a better way to do this! */
  $(function() {
    $('.video-mobile').removeClass('hide');
    $('.video-desktop').addClass('hide');
  })
  }
};

/* Call the function */
mediaSize();
/* Attach the function to the resize event listener */
window.addEventListener('resize', mediaSize, false);  

(jQuery);
