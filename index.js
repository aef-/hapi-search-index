'use strict';

exports.register = function(server, options, next) {
  const searchIndex = require('search-index');
  searchIndex(options, function(err, si) {
    if(err)
      next(err);
    else {
      server.expose(si);
      next();
    }
  });
};

const pkg = require('./package.json');
exports.register.attributes = {
  name: 'searchIndex',
  version: pkg.version
};
