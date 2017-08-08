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
      $('#nav').addClass('show-expanded-nav');
      $('#nav-expanded').addClass('show-expanded-nav');
      $('#menu-overlay').addClass('show-expanded-nav');
    } else {
      // TODO Lag removeClass on #nav so it doesn't look like its flashing away?
      $('#nav-expanded').removeClass('show-expanded-nav');
      $('#nav').removeClass('show-expanded-nav');
      $('#menu-overlay').removeClass('show-expanded-nav');
    }
  }

  function hideMenu() {

  }
});
