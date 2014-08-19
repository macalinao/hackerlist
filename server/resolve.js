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
      return cb(err, null);
    }

    if (!profile.blog) {
      return cb(err, null);
    }

    request.get(profile.blog + '/hacker.json').end(function(err, res) {
      var hacker = res.body;
      if (!hacker) {
        return cb(err, null);
      }

      hacker.basics.handle = hacker.basics.handle || profile.login;
      hacker.basics.picture = hacker.basics.picture || profile.avatar_url;
      cb(err, hacker);
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
