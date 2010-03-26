$(document).ready(function(){

	// Portfolio Switcher 
  $('.switcher a').click( function(e){
		var ind = $(this).closest('ul').find('> *').index( $(this).parent() );
		var wid = $('#projects .wrapper').width();
		var lft = -1 * ( ind * wid + 1 );
		$('#projects .previews').animate( {left:lft}, 800, 'swing' );
		return false;
  } );

	// Scroll to Info
	$.localScroll( {filter:'[class!=ignore]'} );
	/*$('#nav a').click( function(){
		var el = $(this).attr("href");
		var loc = $(el).offset().top;
		if ( ! $.browser.opera )
			$( 'html:not(:animated),body:not(:animated)' ).animate( {scrollTop:loc}, 500, function(){window.location.hash = el} );
		else $('html').animate( {scrollTop:loc}, 800 );
		return false;
	} );*/

	// Project Lightbox
	$('.previews a.img').fancybox();

});
