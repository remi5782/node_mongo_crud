var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pageInfosSchema = new Schema({
    name: {
        type: String,
        unique: false,
        require: true
    },
    title: {
        type: String,
        unique: false,
        require: true
    },
    description: {
        type: String,
        unique: false,
        require: true
    }
},
    {
        timeStamps: true
    
});

module.exports = pageInfosSchema;