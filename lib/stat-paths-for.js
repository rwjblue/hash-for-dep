'use strict';
var pkg = require('./pkg');
var depsFor = require('./deps-for');

/* @private
 * 
 * @method statPathsFor
 * @param {String} name
 * @param
 * @return {Array} the paths required to stat, to ensure a given module has not changed.
 */
module.exports = function statPathsFor(name, dir) {
  var thePackage = pkg(name, dir);
  var paths = depsFor(name, dir).
    map(function(dep)     { return dep.baseDir; }).
    filter(function(path) { return 0 !== path.indexOf(thePackage.baseDir); });

  paths.push(thePackage.baseDir);

  return paths.sort();
};
