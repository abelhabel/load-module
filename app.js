'use strict';
var express = require('express');
var app = express();
var Promise = require('bluebird');
var error = require('./error.js');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:file', function(req, res){
  console.log('file name', req.params.file);
  res.sendFile(__dirname + '/' + req.params.file);
});
app.get('/bower_components/requirejs/:file', function(req, res){
  console.log('file name', __dirname, req.params.file);
  res.sendFile(__dirname + '/bower_components/requirejs/' + req.params.file);
});
app.listen(3000);

process.on("uncaughtException", function(err) {
    console.error("Uncaught Exception");
    console.error(err.stack);
    process.exit(1);
    // newrelic.addCustomParameter("crash", "true");
    // newrelic.noticeError(err);
    // console.log("sending errors to New Relic");
    // newrelic.agent.harvest(function() {
    //     console.log("send complete, crashing process");
    //     process.exit(1);
    // });
});

process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
    // // application specific logging, throwing an error, or other logic here
    // throw new Error('Promise rejection was not handled');
});