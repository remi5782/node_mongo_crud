var mongoose = require('mongoose');

var chalk =  require('chalk');

var dbURL = require('./properties').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;


module.exports = function() {
    mongoose.connect(dbURL, { useNewUrlParser: true }, function(err, client){

    

    }).then(client=> console.log('client', client));
    mongoose.connection.on('connected', function(err, client){
        console.log(connected('Mongoose default connection is open to ', dbURL));
        console.log('connected to', client);
    })

    mongoose.connection.on('error', function(){
        console.log(error('Mongoose error has occured', dbURL))
    })

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected('Mongoose has beemn disconnected', dbURL))
    })

  process.on('SIGINT', function(){
      mongoose.connection.close(function(){
          console.log(termination("Mongoose f=default connection is discoonection has been happened"));
          process.exit(0);
      })
  })
}