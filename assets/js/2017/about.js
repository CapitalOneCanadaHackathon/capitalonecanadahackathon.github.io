$(function() {
  $('.faq-content').on('click', function() {
    if ($(this).find('.faq-triangle-expand').hasClass('rotate')) {
      $(this).find('.faq-triangle-expand').removeClass('rotate');
      $(this).children('.faq-answer').removeClass('faq-expand');
    } else {
      $(this).find('.faq-triangle-expand').addClass('rotate');
      $(this).children('.faq-answer').addClass('faq-expand');
    }
  });
});
