// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, data) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/data-points", function(req, res) {
    res.json(data.questions);
  });

  app.get("/api/friends", function(req, res) {
    res.json(data.friends);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

  });

};
