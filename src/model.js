const Schema = require('mongoose').Schema;
const ObjectId = Schema.ObjectId;
const MODEL_NAME = 'person';

const model = new Schema({
    id: ObjectId,
    name: String,
    lastName: String,
    birthday: Date
});

module.exports = {
    object: model,
    MODEL_NAME: MODEL_NAME
};
