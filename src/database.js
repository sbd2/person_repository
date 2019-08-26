var model = require('./model');

var mongoose = require('mongoose');
const DB_USERNAME = 'admin';
const DB_PASSWORD = 'admin';
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD} 
        @cluster0-ew2v9.mongodb.net/test?retryWrites=true&w=majority`;

var connection = mongoose.createConnection(DB_CONNECTION_STRING, { useNewUrlParser: true });
connection.model(model.modelName, model.model);

module.exports = {
    db: connection,
};
