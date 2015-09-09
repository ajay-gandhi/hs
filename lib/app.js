
/**
 * Handles fs writing and reading
 */

// NPM modules
var rp       = require('request-promise'),
    chalk    = require('chalk'),
    readline = require('readline');

var server_path = 'http://hastebin.com';

/**
 * Saves provided content to hastebin. Returns id
 */
module.exports.save = function (content) {

  var options = {
    url:    server_path + '/documents',
    method: 'POST',
    body:   content
  }

  rp(options)
    .then(function (res) {
      console.log(JSON.parse(res).key);
    })
    // Catch all errors
    .catch(console.trace);
}

/**
 * Loads previously saved content from hastebin
 */
module.exports.load = function (id) {
  var options = server_path + '/raw/' + id;

  rp(options)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
