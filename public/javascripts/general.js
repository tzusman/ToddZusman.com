$(document).ready(function(){

	$('#projects a.prev').css( 'visibility', 'hidden' );
	$('input').attr( 'autocomplete', 'off' );

	if ( window.location.pathname == '/sent' ) 
		$('#thanks').show().delay(10000).fadeOut();

	// Project Bullets
	$('#projects li.bull a').click( function(){
		var ind = $(this).closest('ul').find('> .bull').index( $(this).parent() );
		if ( $('#projects').data('index') == ind )
			return false;
		switch_it( ind );
		return false;
	} );

	// Project Previous
	$('#projects a.prev').click( function(){
		var ind = $('#projects').data('index');
		if ( ind == 0 )
			return false;
		switch_it( ind-1 );
		return false;
	} );

	// Project Next
	$('#projects a.next').click( function(){
		var ind = $('#projects').data('index');
		if ( ind == $('#projects li.bull a').length - 1 )
			return false;
		switch_it( ind+1 );
		return false;
	} );

	// Helper function to switch projects
	var switch_it = function ( ind ) {
		if ( $('#projects').data('working') )
			return false;
		$('#projects').data( 'index', ind );
		$('#projects').data( 'working', true );
    $('#projects .wrapper:visible').fadeOut( 'fast', function(){
      $( $('#projects .wrapper')[ind] ).fadeIn( 'fast', function(){

        var ind = $('#projects').data('index');
	
				// Update the bullets
        $('#projects li.bull a').removeClass( 'curr' );
        $( $('#projects li.bull')[ind] ).find('a').addClass( 'curr' );

        // Previous button visibility
        vis = ind == 0;
        $('#projects a.prev').css( 'visibility', vis?'hidden':'visible' );

        // Next button visibility
        vis = ind == $('#projects li.bull a').length - 1;
        $('#projects a.next').css( 'visibility', vis?'hidden':'visible' );

				// Reset working variable
				$('#projects').data( 'working', false );
      } );
    } );
	}

	// Handle form submission
	$('#contact form').bind( 'submit', function(){

		var problem = false;

		var err = $('#name').val().length < 3;
		problem = problem || err;
		$('#name-wrapper').toggleClass( 'error', err );

		var err = $('#email').val().length < 3;
		problem = problem || err;
		$('#email-wrapper').toggleClass( 'error', err );

		var err = $('#aboot').val().length < 10;
		problem = problem || err;
		$('#about-wrapper').toggleClass( 'error', err );

		$('#error').toggle( problem );

		if ( ! problem )
			$(this).find('.submit input').val( 'Submitting...' ).attr( 'disabled', 'disabled' );
		return ! problem;

	} );
	
	// Scroll to Info
	$.localScroll( {filter:'[class!=ignore]',offset:-45} );

	// Project Preview Lightbox
	$('.previews a.img').fancybox();

});
