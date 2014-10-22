var rework       = require('rework'),
    reworkNPM    = require('rework-npm'),
    reworkVars   = require('rework-vars'),
    autoprefixer = require('autoprefixer');

module.exports = function(src, options) {
  var css = rework(src, options || {})
              .use(reworkNPM())
              .use(reworkVars())
              .toString();

  return autoprefixer().process(css).css;
};
