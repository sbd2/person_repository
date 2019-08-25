var db = require('./database');
var model = require('./model');

const CONTENT_TYPE = 'Content-Type';
const TEXT_HTML = 'text/html';
const APPLICATION_JSON = 'application/json';

var http = require('http');

var server = http.createServer(function (request, response) {
    if (request.url == '/') {

        response.writeHead(200, { CONTENT_TYPE: TEXT_HTML});
        response.write('saved!');
        const Person = db.db.model(model.modelName, model.model);
        const p = new Person;
        p.name = 'John';
        p.lastName = 'Rambo';
        p.date = '1990/02/10';
        p.save();
        response.end();

    } else if (request.url == '/person' && request.method == 'POST') {

        response.writeHead(200, { CONTENT_TYPE: APPLICATION_JSON });
        const Person = db.db.model(model.modelName, model.model);
        const p = new Person;
        p.save();
        
        response.write(p);
        response.end();

    } else if (request.url == '/person' && request.method == 'GET') {
        
        response.writeHead(200, { CONTENT_TYPE: APPLICATION_JSON });
        response.write(/*return all records*/);
        response.end();

    } else {
        response.end('Invalid request');
    }
});

server.listen(5000);

console.log('Node Server up and running on port 5000');

module.exports.server = server;
