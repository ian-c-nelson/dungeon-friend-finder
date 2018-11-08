// ===============================================================================
// Potential Dungeon Friends
// ===============================================================================

var dataPointsArray = [
  {
    id: "01",
    text: "I like to go into dark cramped places.",
    scaleStart: "Strongly agree.",
    scaleMid: "Indifferent.",
    scaleEnd: "Strongly disagree."
  }, {
    id: "02",
    text: "Your party encounters a closed door.",
    scaleStart: "Search for traps.",
    scaleMid: "Open the door.",
    scaleEnd: "Kick the door in."
  }, {
    id: "03",
    text: "I enjoy long trips into the hinterlands.",
    scaleStart: "Strongly agree.",
    scaleMid: "Indifferent.",
    scaleEnd: "Strongly disagree."
  }, {
    id: "04",
    text: "You encounter a travelling merchant caravan.",
    scaleStart: "Negotiate in good faith.",
    scaleMid: "Use intimidation.",
    scaleEnd: "Kick the door in."
  }, {
    id: "05",
    text: "A group of gnolls has not spotted you yet.",
    scaleStart: "Sneak around them.",
    scaleMid: "Attack at range.",
    scaleEnd: "Charge in weapons swinging."
  }, {
    id: "06",
    text: "You see a treasure chest before the rest of your group.",
    scaleStart: "Grab the best loot for yourself.",
    scaleMid: "Notify your group and share equally.",
    scaleEnd: "Pass on your share, you have plenty."
  }, {
    id: "07",
    text: "A mage tries to strike up a conversation in a tavern.",
    scaleStart: "Ignore them, magic gives me the heebie jeebies.",
    scaleMid: "Engage in friendly conversation.",
    scaleEnd: "Talk excitedly about the spell you recently mastered."
  }, {
    id: "08",
    text: "A party member cries out in pain after being struck.",
    scaleStart: "Intervene with your shield.",
    scaleMid: "Attack the kobold who injured them.",
    scaleEnd: "Call on your god to heal your ally's wounds."
  }, {
    id: "09",
    text: "A town magistrate asks for help ridding the area of a pack of ghouls.",
    scaleStart: "Demand a large fee.",
    scaleMid: "Negotiate a reasonable fee and provisions.",
    scaleEnd: "Volunteer your services for the good of the citizens."
  }, {
    id: "10",
    text: "A dragon lands heavily in front of your party and begins to inhale.",
    scaleStart: "Hide behind the warrior and hope his body protects you from the flames.",
    scaleMid: "Tell the group to spread out top minimize casualties.",
    scaleEnd: "Move to the front of the group and attampt to shield them from the flames."
  }
];

console.log("Data Points Imported");

// Note how we export the array. This makes it accessible to other files using require.
module.exports = dataPointsArray;