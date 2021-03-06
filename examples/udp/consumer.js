'use strict';
var discovery = require('../..');
var registry = discovery.createRegistry();

registry.on('available', function (name, data) {
  console.log('%j available: %j', name, data);
});

registry.on('unavailable', function (name, data) {
  console.log('%j unavailable: %j', name, data);
});
