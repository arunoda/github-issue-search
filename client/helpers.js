Template.results.helpers({
  "results": function() {
    return Session.get('results') || [];
  },

  "error": function() {
    return Session.get('error');
  }
});