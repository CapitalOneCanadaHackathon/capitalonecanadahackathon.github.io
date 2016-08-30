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

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);

var degrees = new Array();
var rotator = new Array();
function rotateImage(el, speed)
{

	var elem = document.getElementById(el);
	if(elem)
	{
		try
		{
			if(navigator.userAgent.match("Chrome")){
				elem.style.WebkitTransform = "rotate("+degrees[el]+"deg)";
			} else if(navigator.userAgent.match("Firefox")){
				elem.style.MozTransform = "rotate("+degrees[el]+"deg)";
			} else if(navigator.userAgent.match("MSIE")){
				elem.style.msTransform = "rotate("+degrees[el]+"deg)";
			} else if(navigator.userAgent.match("Opera")){
				elem.style.OTransform = "rotate("+degrees[el]+"deg)";
			} else {
				elem.style.transform = "rotate("+degrees[el]+"deg)";
			}
	
			if(degrees[el])
				degrees[el]+=5;
			else
				degrees[el] = 5;

			if(degrees[el] > 359)
			{
				degrees[el] = 1;
				rotator[el] = null;
				
				if(el == 'sticker_sign')
				{
					$('img.sticker_gift').bind('inview', function(event, visible) {
						if(visible) {
							rotateImage('sticker_gift', 3);
						}
					});
				}
			}
			else
				rotator[el] = setTimeout('rotateImage(\''+el+'\','+speed+')',speed);

		}
		catch(e)
		{
			// swallow, no rotate for you
		}
	}
}

// set up single rotate
$(function () {
	$('img.sticker_code_on').bind('inview', function(event, visible) {
		if(visible) {
			rotateImage('sticker_code_on', 3);
		}
	});
	$('img.sticker_date').bind('inview', function(event, visible) {
		if(visible) {
			rotateImage('sticker_date', 3);
		}
	});
	$('img.sticker_sign').bind('inview', function(event, visible) {
		if(visible) {
			rotateImage('sticker_sign', 3);
		}
	});
});
