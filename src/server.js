var express = require('express');
var bodyParser = require('body-parser');

var db = require('./database').db;
var model = require('./model');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.get('/person', function(request, response) {
    const Person = db.model(model.MODEL_NAME, model.object);
    var result = Person.find({});
    response.send(result);
});

app.post('/person', function(request, response) {
    const Person = db.model(model.MODEL_NAME, model.object);
    const data = new Person;
    
    data.name = request.body.name;
    data.lastName = request.body.lastName;
    data.birthday = request.body.birthday;
    data.save();

    response.sendFile('success.html');
});

var server = app.listen(5000, () => console.log('Node Server up and running on port 5000'));

module.exports.server = server;
