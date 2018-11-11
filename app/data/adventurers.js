// ===============================================================================
// Potential Adventurers
// ===============================================================================

let seedNames = [
    "Alexander Ivanovitch Rostov",
    "Abdul Alhazred",
    "Ajani Goldmane",
    "Brallegwyn",
    "Brom Sturdarsk",
    "Dranaya Raszal",
    "Elaneiros Valmoira",
    "Elizah Henwick",
    "Gwendeth",
    "Itark Of The Howling Vandals",
    "Magmir",
    "Makudar",
    "Martine Levaux",
    "Naramahl Dawnfist Kulanavea",
    "Quorick Umbar",
    "Raga Mirthhide",
    "Richard Pickman",
    "Sierre Wolfstrider",
    "Talesseh Stonetrapper",
    "Thalmun"
];

let seedClasses = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorceror",
    "Warlock",
    "Wizard",
];

let seedRaces = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling"
];

function getRandomItem(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getRandomScores() {
    let scores = [];
    for (let i = 0; i <= 10; i++) {
        scores.push(Math.floor(Math.random() * 5) + 1)
    }
    return scores;
}

function generateAdventurers() {
    let tempArr = [];
    seedNames.forEach(name => {
        tempArr.push(
            {
                name: name,
                class: getRandomItem(seedClasses),
                race: getRandomItem(seedRaces),
                scores: getRandomScores()
            });
    });
    return tempArr;
}

console.log("Generated Adventurers");
// Note how we export the array. This makes it accessible to other files using require.
module.exports = generateAdventurers();