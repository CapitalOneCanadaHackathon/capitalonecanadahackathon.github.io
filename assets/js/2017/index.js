$(function() {
  // Usage: mosaic(element, diffuse, ambient, numTriangles)
  new mosaic(document.getElementById('hero-mosaic'), [0, 138, 103], [11, 64, 109], 10);

  // Custom style for nav in index: Don't show a bottom border
  $('#header').css('border-bottom', '0');
  // Animate in nav elements
  $('#nav').addClass('fade-in');

  // Animate In hero elements
  $('#tagline').addClass('fade-in-from-bottom');
  $('#event-info').addClass('fade-in-from-bottom');
  $('#hero').addClass('fade-in-from-bottom');
  $('#hero-interactive').addClass('fade-in-from-bottom');
  $('#hero-register-cta').addClass('fade-in-from-bottom');
  $('#learn-more').addClass('fade-in-from-bottom');

  /*
   * Parallax "Apple TV" effect modified from:
   * https://webdesign.tutsplus.com/tutorials/apple-tvs-parallax-rollover-effect--cms-27233
   */
  $(document).on('mousemove', '#hero-logo', function(e) {
    var halfW = ( this.clientWidth / 2 );
    var halfH = ( this.clientHeight / 2 );

    var coorX = ( halfW - ( e.pageX - $(this).offset().left ) );
    var coorY = ( halfH - ( e.pageY - $(this).offset().top ) );

    var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 5

    $(this).css('transform', function() {
      return 'perspective( 1500px ) translate3d( 0, -2px, 0 ) scale(1.005) rotateX('+ degX +') rotateY('+ degY +')';
    });
  });

  $(document).on('mouseout', '#hero-logo', function() {
    $(this).removeAttr('style');
  });
});
