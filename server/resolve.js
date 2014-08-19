'use strict';

var GitHubAPI = require('github');
var request = require('superagent');

function resolveGithub(hacker, cb) {
  var gh = new GitHubAPI({
    version: '3.0.0'
  });

  gh.user.getFrom({
    user: hacker
  }, function(err, profile) {
    if (!profile) {
      cb(err, null);
    }

    if (!profile.blog) {
      cb(err, null);
    }

    request.get(profile.blog + '/hacker.json').end(function(err, res) {
      cb(err, res.body || {});
    });
  });
}

module.exports = function(req, res) {
  var hacker = req.params.hacker;

  // First check GitHub
  resolveGithub(hacker, function(err, data) {
    res.json(data);
  });
};
