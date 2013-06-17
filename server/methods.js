var Github = Meteor.require('github');
var github = new Github({version: "3.0.0"});

Meteor.methods({
  "search": function(user, repo, keyword) {
    var repos = Meteor.sync(function(done) {
      github.search.issues({
        user: user,
        repo: repo,
        keyword: keyword,
        state: 'open'
      }, done);
    });

    if(repos.error) {
      throw new Meteor.Error(401, repos.error.message);
    } else {
      return repos.result;
    }
  }
});