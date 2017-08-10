$(function() {
  // Usage: mosaic(element, highlight, background, numTriangles)
  new mosaic(document.getElementById('hero-mosaic'), [18, 80, 110], [25, 52, 65], 10);

  $('#tagline').addClass('hero-animate-in');
  $('#event-info').addClass('hero-animate-in');
  $('#hero-register-cta').addClass('hero-animate-in');
  $('#learn-more').addClass('hero-animate-in');
});
