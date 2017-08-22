$(function() {
  $('.content-accordion').on('click', function() {
    if ($(this).find('.content-accordion-triangle-expand').hasClass('rotate')) {
      $(this).find('.content-accordion-triangle-expand').removeClass('rotate');
      $(this).children('.content-accordion-body').removeClass('content-accordion-expand');
    } else {
      $(this).find('.content-accordion-triangle-expand').addClass('rotate');
      $(this).children('.content-accordion-body').addClass('content-accordion-expand');
    }
  });
});
