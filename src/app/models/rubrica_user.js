const mongoose = require('mongoose');


const rubricaUserSchema = new mongoose.Schema({
  
    id_nivel: String,
    name: String,
    categoria : {
            categoriaActividad: String,
            habRelacionadas: String,
            porcentaje: String,
            nvlAplicacion: String
        }
  
});

// create the model for user and expose it to our app
module.exports = mongoose.model('c_rubrica_user', rubricaUserSchema);