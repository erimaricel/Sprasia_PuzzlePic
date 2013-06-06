
/*
 *	Available background image sizes.
 *
 *  small: 480
 *  medium: 800
 *  large: 1280  
 *
 */

// adjust background image
function initializeLayout(){	
	document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
	$('body').css('background-size','auto '+window.screen.availHeight+'px');
	$('body').css('height',window.screen.availHeight+'px');
	//adjust heigh on landscape mode
	if (window.screen.availWidth > window.screen.availHeight) {
		$('#logo').css('margin-bottom','10%');
	} else {
		$('#logo').css('margin-bottom','30%');
	}
}

$(document).ready(function() {
	
	initializeLayout();
	$(window).resize(function () 
    {
		initializeLayout(window.screen.availHeight);
    });

});

