var mongoose = require('mongoose');

var model = require('./model');

const DB_USERNAME = 'admin';
const DB_PASSWORD = 'admin';
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD} 
        @cluster0-ew2v9.mongodb.net/test?retryWrites=true&w=majority`;

var connection = mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true });

connection.once('open', () => {
    console.log('Connection to DB successful on cluster0-ew2v9');
    connection.model(model.MODEL_NAME, model.object);
});

connection.on('error', () => console.log('Error opening connection to cluster0-ew2v9'));

module.exports = {
    db: connection
};
