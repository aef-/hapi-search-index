'use strict';

exports.register = function(server, options, next) {
  const searchindex = require('search-index');
  searchIndex(options, function(err, si) {
    server.expose('search', si);
    next();
  });
};

exports.register.attributes = {
  pkg: require('./package.json')
};
