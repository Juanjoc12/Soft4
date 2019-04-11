const mongoose = require( 'mongoose' );


const userAdminSchema = new mongoose.Schema( {

        id_rubrica: String,
        n_plantilla: String,
        niveles :{
            nivel:{
                n_nivel: String,
                porcentaje: String,
                categorias: {
                    c_actividad : String,
                    habRelacionada: String,
                    nvlAplicacion: String,
                }
            }
        }

} );

// create the model for user and expose it to our app
module.exports = mongoose.model( 'c_ru_user', userAdminSchema );