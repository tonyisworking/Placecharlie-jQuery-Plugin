(function($) {
  // PlaceCharlie JQuery Plugin
  $.fn.placecharlie = function(options, callback) {
    // Setup
    var $elements = this;
    if (!$elements.length) { return $elements; }
    options = $.extend({},$.fn.placecharlie.defaults, options);

    // Turn each element selected into a charlie
    $elements.each(function() {
      var element = this,
         $element = $(element);

      // Get style of target
      if (cs = window.getComputedStyle(element))
        var style = cs.cssText;

      // Same for IE
      if (!style && element.currentStyle)
        var style = element.currentStyle.cssText;

      // If couldn't get style, the display will have to suffice
      if (!style)
        var display = $element.css('display');

      var height = $element.height(),
           width = $element.width();

      // Swap target for kitten image
      var imageUrl = 'http://placesheen.com/' + width + '/' + height;
      var $charlie = $('<img src="' + imageUrl + '" />');

      // Load target css into charlie element
      if (style) {
        $kitten[0].style.cssText = style;
      } else {
        $charlie.css({
          'display': display,
            'width': width,
           'height': height
        });
      }

      // Swap the element for a charlie
      $element.replaceWith($charlie);
      $charlie.hide().fadeIn(options.fadeSpeed, callback);
    });

    return $elements;
  };

  // default options
  $.fn.placecharlie.defaults = {
    fadeSpeed: 500
  };

})(jQuery);