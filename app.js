'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:file', function(req, res){
  console.log('file name', req.params.file);
  res.sendFile(__dirname + '/' + req.params.file);
});

app.listen(3000);
