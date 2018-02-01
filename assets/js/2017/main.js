$(function() {
  $('.content-accordion-title').on('click', function() {
    if ($(this).parent().find('.content-accordion-triangle-expand').hasClass('rotate')) {
      $(this).parent().find('.content-accordion-triangle-expand').removeClass('rotate');
      $(this).parent().children('.content-accordion-body').removeClass('content-accordion-expand');
    } else {
      $(this).parent().find('.content-accordion-triangle-expand').addClass('rotate');
      $(this).parent().children('.content-accordion-body').addClass('content-accordion-expand');
    }
  });
});
