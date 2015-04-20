'use strict';

var path = require('path');

/*
 * @private
 *
 * when using require.resolve, the entry files location is provided. This
 * utility attempts to locate the true root directory.
 *
 * given:  /path/to/project/node_modules/library/lib/index.js + library
 * we get: /path/to/project/node_modules/library
 *
 * @method moduleBaseDir
 * @param moduleEntryFilePath {String}
 * @param moduleName {String}
 * @return {String} the root directory of a given module
 *
 */
module.exports = function moduleBaseDir(moduleEntryFilePath, moduleName) {
  var segment = path.join('node_modules', moduleName);
  var regexp = new RegExp(segment + '.*$');
  var result = moduleEntryFilePath.replace(regexp, segment).replace(/index\.js\/?$/, '');
  console.log('moduleEntryFilePath', moduleEntryFilePath);
  console.log('segment', segment);
  console.log('regexp', regexp);
  console.log('result', result);

  return result;
};
