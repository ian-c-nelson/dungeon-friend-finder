const _ = require("lodash-core");
const CharacterGenerator = require("../modules/character-generator");
const charGen = new CharacterGenerator();

// ===============================================================================
// Potential Adventurers
// ===============================================================================

function getRandomScores() {
    let scores = [];
    for (let i = 0; i <= 10; i++) {
        scores.push(Math.floor(Math.random() * 5) + 1)
    }
    return scores;
}

function generateAdventurers(howMany) {
    howMany = parseInt(howMany) || 1;
    let adventurers = _.times(howMany, () => {
        let char = charGen.generateRandomCharacter(charGen.rtb.doRoll(30));
        char.scores = getRandomScores();
        return char;
    });

    return adventurers;
}

console.log("Generated Adventurers");
// Note how we export the array. This makes it accessible to other files using require.
module.exports = generateAdventurers(100);