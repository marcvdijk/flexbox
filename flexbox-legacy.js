$(document).ready(function() {
  
  // Loop over all flex-container* divs and wrap the children in a
  // flex-item-wrapper div. Needed to align the flex-items inside the
  // flex-item-wrapper div. Might cause problems for divs not of class flex-item
  
  if ($('html').hasClass('no-flexbox')) {
    $('[class*="flex-container"]').each(function() {
      var flexitems = $(this).children();
      flexitems.wrapAll( $('<div>').addClass('flex-item-wrapper') );
    });
  }
 
});