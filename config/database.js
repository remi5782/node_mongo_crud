var mongoose = require('mongoose');

var chalk =  require('chalk');

var dbURL = require('./properties').DB;

var connected = chak.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;


module.exports = function() {
    mongooose.connect(dbUrl);
    mongoose.connection.on('connected', function(){
        console.log(connected('Mongoose default connection is open to ', dbURL));
    })

    mongoose.connection.on('error', function(){
        console.log(error('Mongoose error has occured', dbURL))
    })

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected('Mongoose has beemn disconnected', dbUrl))
    })

  process.on('SIGINT', function(){
      mongoose.connection.close(function(){
          console.log(termination("Mongoose f=default connection is discoonection has been happened"));
          process.exit(0);
      })
  })
}