// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../survey.html"));
  });

  app.get("/public/css/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/css/home.css"));
  });

  app.get("/public/css/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/css/survey.css"));
  });
  
  app.get("/public/js/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/js/survey.js"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });
};
