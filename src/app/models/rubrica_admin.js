const mongoose = require( 'mongoose' );


const rubricaAdminSchema = new mongoose.Schema( {

    id_nivel: String,
    porcentaje: String,
    categorias: String,

} );

// create the model for user and expose it to our app
module.exports = mongoose.model( 'c_rubrica_admin', rubricaAdminSchema );