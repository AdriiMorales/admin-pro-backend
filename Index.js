require('dotenv').config();

const  express  = require("express");
const cors = require('cors');

const  { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

//configurar CORS
app.use(cors());

// Base De Datos

dbConnection();

//User: mean_user
//Pass: 1A2B3C

console.log( process.env );

// Rutas
app.get( '/', ( req , res ) => {

    res.json( {
        ok: true,
        msg: 'Hola Mundo'
    } )

} );

app.listen( process.env.PORT,() => {

    console.log('Servidor corriendo en puerto ' + process.env.PORT);

} );

