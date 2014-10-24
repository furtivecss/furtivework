var rework       = require('rework'),
    reworkNPM    = require('rework-npm'),
    reworkVars   = require('rework-vars');

module.exports = function(src, options) {
  return rework(src, options || {})
          .use(reworkNPM())
          .use(reworkVars())
          .toString({ sourcemap: true });
};
