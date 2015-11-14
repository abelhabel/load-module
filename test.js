var someModule = require('some-module');

var test = {
  get: function() {
    return someModule;
  }
};

module.exports = test;