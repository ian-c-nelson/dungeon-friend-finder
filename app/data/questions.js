// ===============================================================================
// Survey Questions
// ===============================================================================

var questionsArray = [
  {
    id: "01",
    text: "I like to go into dark cramped places.",
    answer01: "Strongly agree.",
    answer02: "Mildy agree.",
    answer03: "Neither agree nor disagree.",
    answer04: "Mildy disagree.",
    answer05: "Strongly disagree."
  }, {
    id: "02",
    text: "Your party encounters a closed door.",
    answer01: "Search for traps before opening the door.",
    answer02: "Listen carefully before opening the door.",
    answer03: "Open the door normally.",
    answer04: "Open the door forcefully.",
    answer05: "Kick the door in."
  }, {
    id: "03",
    text: "I enjoy long trips into the hinterlands.",
    answer01: "Strongly agree.",
    answer02: "Mildy agree.",
    answer03: "Neither agree nor disagree.",
    answer04: "Mildy disagree.",
    answer05: "Strongly disagree."
  }, {
    id: "04",
    text: "You encounter a travelling merchant caravan.",
    answer01: "Haggle for the best price.",
    answer02: "Negotiate in good faith.",
    answer03: "Pay the going prices.",
    answer04: "Use intimidation to force the merchant to sell cheaply.",
    answer05: "Attack the caravan and take what you want."
  }, {
    id: "05",
    text: "A group of gnolls has not spotted you yet.",
    answer01: "Sneak around them without engaging.",
    answer02: "Sneak around them and set up an ambush.",
    answer03: "Prepare defensive spells and items, then engage at range.",
    answer04: "Prepare defensive spells and items, then engage normally.",
    answer05: "Charge in with a battlecry and weapons swinging."
  }, {
    id: "06",
    text: "You see a treasure chest before the rest of your group.",
    answer01: "Pass on your share, you have plenty.",
    answer02: "Reqest a specific item and pass on the rest.",
    answer03: "Notify your group and share equally.",
    answer04: "Grab the best loot for yourself.",
    answer05: "Keep all of loot for yourself.",
  }, {
    id: "07",
    text: "A mage tries to strike up a conversation in a tavern.",
    answer01: "Ignore them, magic gives me the heebie jeebies.",
    answer02: "Begrudgingly respond to them.",
    answer03: "Engage in friendly conversation.",
    answer04: "Offer to buy them a drink and listen to their adventures.",
    answer05: "Talk excitedly about the spell you recently mastered."
  }, {
    id: "08",
    text: "A party member cries out in pain after being struck.",
    answer01: "Attack the monster who injured them.",
    answer02: "Distract the monster who injured them.",
    answer03: "Intervene with your shield and body to protect from further harm.",
    answer04: "Drag your injured ally away from the fighting.",
    answer05: "Call on your god to heal your ally's wounds."
  }, {
    id: "09",
    text: "A magistrate of a poor village asks for help ridding the area of a pack of ghouls.",
    answer01: "Volunteer your services for the good of the citizens.",
    answer02: "Offer your services for a nominal fee.",
    answer03: "Negotiate a reasonable fee and provisions.",
    answer04: "Demand a large fee for your help.",
    answer05: "Refuse to help them, they are not worth your time.",
  }, {
    id: "10",
    text: "A dragon lands heavily in front of your party and begins to inhale.",
    answer01: "Let out a primal scream and charge the dragon with your weapon ready.",
    answer02: "Move to the front of the group and attempt to shield them from the flames.",
    answer03: "Tell the group to spread out to minimize casualties.",
    answer04: "Cast any defensive magics you have and prepare for battle.",
    answer05: "Hide behind the warrior and hope his body protects you from the flames.",
  }
];

console.log("Data Points Imported");

// Note how we export the array. This makes it accessible to other files using require.
module.exports = questionsArray;