$(document).ready(function(){

	$('#projects').data( 'index', 0 );
	$('div.switcher a.prev').css( 'visibility', 'hidden' );
	$( $('ul.switcher a')[0] ).addClass( 'curr' );

	var switch_it = function ( ind ) {
		console.log( "Index: " + ind );
		var wid = $('#projects .wrapper').width();
		var lft = -1 * ( ind * wid + 1 );
		var cnt = $('.previews > div').length;
		$('#projects .previews').animate( {left:lft}, 800, 'swing' );
		$('#projects').data( 'index', ind );
		$('ul.switcher a').removeClass( 'curr' );
		$( $('ul.switcher a')[ ind ] ).addClass( 'curr' );
		if ( ind == 0 )
			$('div.switcher a.prev').css('visibility','hidden');
		else $('div.switcher a.prev').css('visibility','');
		if ( ind == cnt-1 )
			$('div.switcher a.next').css('visibility','hidden');
		else $('div.switcher a.next').css('visibility','');
	}

	// Portfolio Switcher 
  $('ul.switcher a').click( function(e){
		var ind = $(this).closest('.switcher').find('> *').index( $(this).parent() );
		switch_it( ind );
		return false;
  } );

	$('div.switcher a').click( function(e){
		var ind = $('#projects').data('index');
		var delta = $(this).hasClass('next') ? 1 : -1;
		var cnt = $('.previews > div').length;
		if ( delta < 0 && ind == 0 ) return;
		if ( delta > 0 && ind == cnt-1 ) return;
		switch_it( ind+delta );
		return false;
	} );

	// Scroll to Info
	$.localScroll( {filter:'[class!=ignore]'} );

	// Project Preview Lightbox
	$('.previews a.img').fancybox();

});
