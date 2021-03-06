var mongoose = require('mongoose');
var pageInfosSchema = require('./pageInfos.model');

pageInfosSchema.statistics ={
    create: function(data, cb){
        var pageInfo = new this(data);
        pageInfosSchema.save(cb);
    },
    get: function(query, cb){
        this.find(query, cb)
    },
    getByName: function(query, cb) {
        this.find(query, cb);
    },
    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set:updateData}, {new: true}, cb)
    },
    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}

var pageInfosModel = mongoose.model('pageInfos', pageInfosSchema);
module.exports= pageInfosModel;