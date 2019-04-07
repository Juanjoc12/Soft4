module.exports = ( app, passport ) => {

	// index routes
	app.get( '/', ( req, res ) => {
		res.render( 'index' );
	} );

	//login view
	app.get( '/login', ( req, res ) => {
		res.render( 'login.ejs', {
			message: req.flash( 'loginMessage' )
		} );
	} );

	app.get( '/formAdmin', isLoggedInAdmin, ( req, res ) => {
		console.log(user.local.email)
		res.render( 'formAdmin.ejs', {
			
		} );
	} );

	app.get( '/formUsuario', ( req, res ) => {
		res.render( 'formUsuario.ejs', {
			
		} );
	} );

	app.post( '/login', passport.authenticate( 'local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	} ) );

	// signup view
	app.get( '/signup', ( req, res ) => {
		res.render( 'signup', {
			message: req.flash( 'signupMessage' )
		} );
	} );


	app.post( '/signup', passport.authenticate( 'local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	} ) );

	//profile view
	app.get( '/profile', isLoggedIn, ( req, res ) => {
		console.log(user.local.email)
		res.render( 'profile', {
			user: req.user
		} );
	} );

	// logout
	app.get( '/logout', ( req, res ) => {
		req.logout();
		res.redirect( '/' );
	} );
	};



function isLoggedInAdmin( req, res, next ) {
	console.log(req.local.user)
	if ( req.isAuthenticated() && req.user.local.Admin == true ) {
		return next();
	}

	res.redirect( '/' );
}

function isLoggedIn( req, res, next ) {
	console.log(req.local.user)
	if ( req.isAuthenticated() && req.user.local.Admin == true) {
		return next();
	}

	res.redirect( '/' );
}
