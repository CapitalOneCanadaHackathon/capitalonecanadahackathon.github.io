$(document).ready(function() {
  var hideMenu = function() {
    $("#hamburger .menu").addClass("hide").removeClass("show");
  };

  var showMenu = function() {
    $("#hamburger .menu").addClass("show").removeClass("hide");
  };

  $("#hamburger .button").on('click', function(e) {
    e.preventDefault();
    showMenu();
  });

  $("#hamburger .close-menu").on('click', function(e) {
    e.preventDefault();
    hideMenu();
  });
});
