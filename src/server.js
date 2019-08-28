var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var db = require('./database').db;
var model = require('./model');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Get the root page where you can load a new person
 */
app.get('/', function(request, response) {
    response.sendfile(path.resolve('./www/index.html'));
});

/**
 * Get the page where you can query the db by birthday
 */
app.get('/query', function(request, response) {
    response.sendFile(path.resolve('./www/find.html'));
});

/**
 * Send the query birthday and get the results back
 */
app.post('/find', function(request, response) {
    const Person = db.model(model.MODEL_NAME, model.object);
    Person.find({ birthday: request.body.birthday }, { _id: 0, __v: 0 }, (err, res) => {
        if (err) {
            throw new Error();
        }
        response.send(res);
    });
    
});

/**
 * Send the person's data to the db
 */
app.post('/person', function(request, response) {
    const Person = db.model(model.MODEL_NAME, model.object);
    const data = new Person;
    
    data.name = request.body.name;
    data.lastName = request.body.lastName;
    data.birthday = request.body.birthday;
    data.save();

    response.sendFile(path.resolve('./www/success.html'));
});

var server = app.listen(5000, () => console.log('Node Server up and running on port 5000'));

module.exports = server;
