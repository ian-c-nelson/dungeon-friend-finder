// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------
  app.get("/matches", function (req, res) {
    var howMany = parseInt(req.params.howMany) || 5;
    app.data.matches = app.lc.getTopN(app.data.userInfo, app.data.adventurers, howMany);

    let response = {
      matches: app.data.matches,
      userInfo: app.data.userInfo
    };

    console.log(response);

    res.render("matches", response);
  });

  app.get("/survey", function (req, res) {
    res.render("survey", { questions: app.data.questions });
  });

  app.get("*", function (req, res) {
    res.render("index");
  });
};
