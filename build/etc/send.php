<?

	try {

		$to = 'toddzusman@gmail.com';
		$subject = 'ToddZusman.com Contact';
	
		$msg  = sprintf( 'Sent on %s', date('F j, Y \a\t g:ia') );
		$msg .= sprintf( "\nName: %s", $_POST['name'] );
		$msg .= sprintf( "\nEmail: %s", $_POST['email'] );
		$msg .= sprintf( "\n\n%s", $_POST['about'] );

		$hdrs  = "From: ToddZusman.com\r\n";
    $hdrs .= sprintf( "Reply-To: %s\r\n", $_POST['email'] );

		mail( $to, $subject, $msg );	
	
		header( 'Location: /sent' );

	} catch ( Exception $e ) {
		// Nothing yet		
	}

?>
