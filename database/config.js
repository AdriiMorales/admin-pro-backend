const mongoose = require('mongoose');

require('dotenv').config();


const dbConnection = async () => {

    try {

        mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        
        console.log('BD Online');

    } catch (error) {

        console.log(error);
        throw new Error ('error a la hora de iniciar la BD ver Logs')
        
    }




}

module.exports = {
    dbConnection
}