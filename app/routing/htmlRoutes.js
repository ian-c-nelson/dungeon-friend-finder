// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, data) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------
  app.get("/survey", function(req, res) {
    res.render("survey", { questions: data.questions });
  });

  app.get("*", function(req, res) {
    res.render("index", {  });
  });
};
