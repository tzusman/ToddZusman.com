$(document).ready(function(){

	$('#projects li.bull a').click( function(){
		var ind = $(this).closest('ul').find('> .bull').index( $(this).parent() );
		if ( $('#projects').data('index') == ind )
			return false;
		$('#projects').data( 'index', ind );
		$('#projects .wrapper:visible').fadeOut( 'fast', function(){
			$( $('#projects .wrapper')[ind] ).fadeIn( 'fast', function(){

				var ind = $('#projects').data('index');
				$('#projects li.bull a').removeClass( 'curr' );
				$( $('#projects li.bull')[ind] ).find('a').addClass( 'curr' );

				console.log( 'Index: ' + ind );

				vis = ind == 0;
				console.log( ' - Prev Vis: ' + vis );
				$('#projects a.prev').css( 'visibility', vis?'none':'' );
				
				vis = ind == $('#projects li.bull a').length;
			
				console.log( ' - Next Vis: ' + vis );
				$('#projects a.next').css( 'visibility', vis?'none':'' );
					

			} );
		} );
		return false;
	} );

	/*$('#projects').data( 'index', 0 );
	$('div.switcher a.prev').css( 'visibility', 'hidden' );
	$( $('ul.switcher a')[0] ).addClass( 'curr' );

	var switch_it = function ( ind ) {
		var wid = $('#projects .wrapper').width();
		var lft = -1 * ( ind * wid + 1 );
		var cnt = $('.previews > div').length;
		$('#projects').data( 'index', ind );
		$('#projects .previews').animate( {left:lft}, 800, 'swing', function(){
			var ind = $('#projects').data( 'index' );
			$('ul.switcher a').removeClass( 'curr' );
			$( $('ul.switcher a')[ ind ] ).addClass( 'curr' );
			if ( ind == 0 )
				$('div.switcher a.prev').css('visibility','hidden');
			else $('div.switcher a.prev').css('visibility','');
			if ( ind == cnt-1 )
				$('div.switcher a.next').css('visibility','hidden');
			else $('div.switcher a.next').css('visibility','');
		} );
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
	*/


	/*
	$(document).keypress( function(e){
		console.log( e );
		if ( e.keyCode == 37 ) {
			var ind = $('#projects').data('index');
			if ( ind == 0 ) return;
			switch_it( ind-1 );
		} else if ( e.keyCode == 39 ) {
			var ind = $('#projects').data('index');
			var cnt = $('.previews > div').length;
			if ( ind == cnt-1 ) return;
			switch_it( ind+1 );	
		}
	} );
	*/

	/*
	$('#projects').scrollable( {
		easing: 'swing',
		size: '1',
		items: '.previews',
		loop: 'true',
		next: '.next',
		navi: '.prev',
		naviItem: 'a',
		keyboard: true,			
		speed: '800'
	} );
	*/
	
	// Scroll to Info
	$.localScroll( {filter:'[class!=ignore]',offset:-45} );

	// Project Preview Lightbox
	$('.previews a.img').fancybox();

});
