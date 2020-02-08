var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var properties = require('./config/properties');
var db = require('./config/database');
var pageInfoRoutes = require('./api/pageInfos/pageInfos.routes');
var app = express();
var bodyParseJSON = bodyParser.json();
var bodyParserUrlEncoded = bodyParser.urlencoded({extended: true});
var router = express.Router();
db();
app.use(log);
app.use(bodyParseJSON);
app.use(bodyParserUrlEncoded);
app.use(function(req, res,next){
    res.setHeader('Access-Control-ALlow-Origin', '*');
    res.setHeader('Access-Control-ALlow-Credentials', true);
    res.setHeader('Access-Control-ALlow-Methods', "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader('Access-Control-ALlow-Headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requrested-with, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
    next();
})

app.use('/api', router);

pageInfoRoutes(router);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port .`)
})