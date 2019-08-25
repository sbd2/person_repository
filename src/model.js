const Schema = require('mongoose').Schema;
const ObjectId = Schema.ObjectId;
const MODEL_NAME = 'person';

const Person = new Schema({
    id: ObjectId,
    name: String,
    lastName: String,
    birthday: Date
});

module.exports.model = Person;
module.exports.modelName = MODEL_NAME;
