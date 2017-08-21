$(function() {
  $('#hamburger').on('click', function() {
    if (!$('#nav-expanded').hasClass('show-expanded-nav')) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  $('#menu-overlay').on('click', function() {
    hideMenu();
  });

  function animateHamburgerAsX(state) {
    if (state) {
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
    animateHamburgerAsX(true);
    $('#nav-expanded,#menu-overlay').addClass('show-expanded-nav');
    // Disable scrolling on the page while the nav is open
    $('body').addClass('disable-scroll');
  }

  function hideMenu() {
    animateHamburgerAsX(false);
    $('#nav-expanded,#menu-overlay').removeClass('show-expanded-nav');
    $('body').removeClass('disable-scroll');
  }

  // Add box-shadow on scroll
  $(document).on('scroll', function(e) {
    e.preventDefault();
    if ($(this).scrollTop() != 0) {
      $('#header').addClass('scrolling');
    } else {
      $('#header').removeClass('scrolling');
    }
  });
});
