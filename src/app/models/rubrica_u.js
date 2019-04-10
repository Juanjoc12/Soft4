const mongoose = require( 'mongoose' );


const userAdminSchema = new mongoose.Schema( {

    id_nivel: String,
    categoria: String

} );

// create the model for user and expose it to our app
module.exports = mongoose.model( 'c_ru_user', userAdminSchema );