$(document).ready(function () {
    $('.slideout-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();
      var pageContent = $('.container');

    	// toggle open class
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "-1px"
	    	});
        pageContent.toggleClass("container_opacity");
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	}, 251);
        pageContent.toggleClass("container_opacity");
    	}
    });
});

// retrieved and modified from http://alijafarian.com/jquery-horizontal-slideout-menu/
