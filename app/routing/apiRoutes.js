const CharacterGenerator = require("../modules/character-generator");
const charGen = new CharacterGenerator();

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/adventurers", function (req, res) {
    res.json(app.data.adventurers);
  });

  app.get("/api/data-points", function (req, res) {
    res.json(app.data.questions);
  });

  app.get("/api/user", function (req, res) {
    res.json(app.data.userInfo);
  });

  app.get("/api/matches/:howMany", function (req, res) {
    var howMany = parseInt(req.params.howMany) || 5;
    app.data.matches = app.lc.getTopN(app.data.userInfo, app.data.adventurers, howMany);
    res.json(app.data.matches);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------
  app.post("/api/user", function (req, res) {
    app.data.userInfo = req.body;

    // let char = charGen.generateRandomCharacter(app.data.userInfo);
    // char.scores = userInfo.scores

    res.json(app.data.userInfo);
  });
};
