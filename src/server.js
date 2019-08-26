var express = require('express');
var bodyParser = require('body-parser');

var db = require('./database');
var model = require('./model');

const CONTENT_TYPE = 'Content-Type';
const TEXT_HTML = 'text/html';
const APPLICATION_JSON = 'application/json';

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.get('/person', function(request, response) {
    const Person = db.db.model(model.modelName, model.model);
    Person.find
});

app.post('/person', function(request, response) {
    const Person = db.db.model(model.modelName, model.model);
    const data = new Person;
    
    data.name = request.body.name;
    data.lastName = request.body.lastName;
    data.birthday = request.body.birthday;
    data.save();

    response.sendFile('success.html');
});

var server = app.listen(5000, () => console.log('Node Server up and running on port 5000'));

module.exports.server = server;
