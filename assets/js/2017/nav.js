$(function() {
  $('#hamburger').on('click', function() {
    animateHamburger();
    showMenu()
  });

  function animateHamburger() {
    if (!$('#hamburger').hasClass('animate-x')) {
      $('#hamburger').addClass('animate-x');
      $('#hamburger div:first-child').addClass('animate-x');
      $('#hamburger div:last-child').addClass('animate-x');
    } else {
      $('#hamburger').removeClass('animate-x');
      $('#hamburger div:first-child').removeClass('animate-x');
      $('#hamburger div:last-child').removeClass('animate-x');
    }
  }

  function showMenu() {
    if (!$('#nav').hasClass('show-expanded-nav')) {
      $('#nav,#nav-expanded,#menu-overlay').addClass('show-expanded-nav');

      // Disable scrolling on the page while the nav is open
      $('body').addClass('disable-scroll');
    } else {
      // TODO Lag removeClass on #nav so it doesn't look like its flashing away?
      $('#nav, #nav-expanded,#menu-overlay').removeClass('show-expanded-nav');
      $('body').removeClass('disable-scroll');
    }
  }

  function hideMenu() {

  }
});
