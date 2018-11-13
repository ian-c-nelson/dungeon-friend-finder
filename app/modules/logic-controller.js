const _ = require("lodash-core");

class LogicController {
}

LogicController.prototype.getTopN = function (userInfo, adventurers, n) {
    if (!userInfo) {
        return null;
    }

    let matches = this.mapMatchScores(userInfo, adventurers).slice(0, n);
    return matches;
};

LogicController.prototype.getScoreMatchValue = function (info1, info2) {
    // Zero is a perfect match.
    let matchValue = 0;

    // Compare the survey answers.
    for (let i = 0; i < info1.scores.length; i++) {
        matchValue += Math.abs(info1.scores[i] - info2.scores[i]);
    }

    // Compare race. If they are not the same race lower compatibility slightly
    if (info1.race !== info2.race) {
        matchValue += 2;
    }

    // Compare class. If they are the same class lower compatibility strongly.  Parties function best with a variety of roles represented.
    if (info1.race === info2.race) {
        matchValue += 5;
    }

    return matchValue;
};

LogicController.prototype.mapMatchScores = function (userInfo, adventurers) {
    let matches = _.map(adventurers, adventurer => {
        return {
            adventurer: adventurer,
            matchScore: this.getScoreMatchValue(userInfo, adventurer)
        }
    }).sort((a, b) => {
        return a.matchScore - b.matchScore;
    });

    return matches;
}

module.exports = LogicController;
