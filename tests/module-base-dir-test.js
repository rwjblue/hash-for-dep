'use strict';
var path = require('path');
var assert = require('assert');
var moduleBaseDir = require('../lib/module-base-dir');

var fixturesPath = path.join(__dirname, 'fixtures');
var moduleName = 'foo';
var modulePath = path.join(fixturesPath, 'node_modules', moduleName);

describe('moduleBaseDir', function() {
  it('Locates the true root directory for a module', function() {
    assert.equal(moduleBaseDir(modulePath, moduleName), modulePath);
    assert.equal(moduleBaseDir(path.join(modulePath, 'asdf.js'), moduleName), modulePath);
    assert.equal(moduleBaseDir(path.join(modulePath, 'index.js'), moduleName), modulePath);
    assert.equal(moduleBaseDir(path.join(modulePath, 'lib', 'index.js'), moduleName), modulePath);
  });
});
