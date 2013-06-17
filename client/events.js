Template.home.events({
  "click #search": function() {
    Session.set('error', null);
    Session.set('results', null);

    var user = $('#user').val();
    var repo = $('#repo').val();
    var keyword = $('#keyword').val();

    $('#search').html('Searching...');
    Meteor.call('search', user, repo, keyword, function(err, results) {
      console.log(results);
      $('#search').html('Search Now');
      if(err) {
        Session.set('error', err);
      } else {
        Session.set('results', results.issues);
      }
    });
  }
});