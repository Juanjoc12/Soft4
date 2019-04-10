module.exports = ( app, passport ) => {
	const Plant = require( './models/rubrica_u' );
	const Rubric = require( './models/rubrica_admin' );
	
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

	app.get( '/formAdmin', async ( req, res ) => {
		const rubric = await Rubric.find();
		console.log(rubric)
		res.render( 'formAdmin.ejs', {
			rubric
		} );
	} );

	app.post( '/formAdmin', async ( req, res, next ) => {
		const rubric = new Rubric( req.body );
		await rubric.save();
		res.redirect( '/formAdmin' );
	} );

	app.get( '/delete/:id', async ( req, res, next ) => {
		const { id } = req.params;
		await Rubric.remove({_id : id});
		res.redirect( '/formAdmin' );
	} );

	app.get( '/formUsuario', async ( req, res ) => {
		const p = await Plant.find();
		console.log(p)
		res.render( 'formUsuario.ejs', {
			p
		} );
	} );

	app.get( '/delete/:id', async ( req, res, next ) => {
		const { id } = req.params;
		await Plant.remove({_id : id});
		res.redirect( '/formUsuario' );
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


function isLoggedIn( req, res, next ) {
	if ( req.isAuthenticated() ) {
		return next();
	}

	res.redirect( '/' );
}
