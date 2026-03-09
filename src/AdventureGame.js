/*
Adventure Game
This game will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game. The player will be able to choose their own path and the story will changebased on their decisions.
*/
/*
// Display the game Title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Get player name using readline-sync
// Import the readline module
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

// Import the readline-sync package
const readline = require('readline-sync');

try {
    // Prompt the user for their name
    playerName = readline.question('Enter your Player Name: ');

    // Validate input
    if (!playerName.trim()) {
        console.log('Name cannot be empty.');
    } else {
        console.log(`Hello, ${playerName}!`);
    }
} catch (error) {
    console.error('An error occurred while reading input:', error.message);
}

//readline.question("Please Enter Your Name : ");
console.log("Welcome to the Adventure Game " + playerName + "!");
console.log("Your starting Gold Amount is " + playerGold);
*/

// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let currentLocation = "village";
let gameRunning = true;
let inventory = [];
/* let weaponDamage;
let monsterDefense = 5;
let healingPotionValue = 30;
console.log("Weapon Damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");
console.log("Monster Defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");
console.log("Healing Potion Value: " + healingPotionValue);
console.log("A potion will restore 30 health!");
 */
console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

// =========================================
// START Lab: Battle Calculator
// =========================================
// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0;      // Will increase to 10 when player gets a sword
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;    // Monster's defense value
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");
// =========================================
// END Lab: Battle Calculator
// =========================================
