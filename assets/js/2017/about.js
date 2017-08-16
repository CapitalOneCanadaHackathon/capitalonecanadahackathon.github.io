$(function() {
  $('.faq-content').on('click', function() {
    if ($('.faq-triangle-expand').hasClass('rotate')) {
      $('.faq-triangle-expand').removeClass('rotate');  
    } else {
      $('.faq-triangle-expand').addClass('rotate');
    }
  });
});
