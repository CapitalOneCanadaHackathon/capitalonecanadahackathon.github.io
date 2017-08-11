$(function() {
  // Usage: mosaic(element, diffuse, ambient, numTriangles)
  new mosaic(document.getElementById('hero-mosaic'), [15, 58, 79], [25, 52, 65], 10);

  // Animate in nav elements
  $('#nav').addClass('fade-in');

  // Animate In hero elements
  $('#tagline').addClass('hero-animate-in');
  $('#event-info').addClass('hero-animate-in');
  $('#hero').addClass('hero-animate-in');
  $('#hero-register-cta').addClass('hero-animate-in');
  $('#learn-more').addClass('hero-animate-in');
});
