$(document).ready(function(){

	$('#projects a.prev').css( 'visibility', 'hidden' );

	if ( window.location.pathname == '/sent' ) 
		$('#thanks').show();
	

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
		$(this).find('.submit input').val( 'Submitting...' ).attr( 'disabled', 'disabled' );
	} );
	
	// Scroll to Info
	$.localScroll( {filter:'[class!=ignore]',offset:-45} );

	// Project Preview Lightbox
	$('.previews a.img').fancybox();

});
