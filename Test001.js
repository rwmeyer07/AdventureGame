// Item templates with properties
const healthPotion = {
    name: "Health Potion",
    type: "potion",
    value: 5,     // Cost in gold
    effect: 30,   // Healing amount
    description: "Restores 30 health points"
};

const sword = {
    name: "Sword",
    type: "weapon",
    value: 10,    // Cost in gold
    effect: 10,   // Damage amount
    description: "A sturdy blade for combat"
};

const shield = {
    name: "Wooden Shield",
    type: "armor",
    value: 8,    // Cost in gold
    effect: 5,   // protection amount
    description: "Reduces damage taken in combat"
};

const advancedweapon = {
    name: "Steel Sword",
    type: "weapon",
    value: 10,    // Cost in gold
    effect: 20,   // Damage amount
    description: "An advanced blade for combat"
};

const advancedarmor = {
    name: "Iron Shield",
    type: "armor",
    value: 8,    // Cost in gold
    effect: 10,   // protection amount
    description: "Reduces additional damage taken in combat"
};

// Create empty inventory array (from previous lab)
let inventory = [];  // Will now store item objects instead of strings

inventory.push(healthPotion);
inventory.push(sword);
inventory.push(shield);
inventory.push(advancedweapon);
inventory.push(advancedarmor);

//console.log(inventory);

function getItemsByType(type) {
    return inventory.filter(item => item.type == type);
}

//console.log(getItemsByType("armor"));

//RWM 
function getBestItem(type) {
    const maxValue = Math.max(...getItemsByType(type).map(item => 
        item.effect));
    //console.log("maxValue : " + maxValue);        
    return getItemsByType(type).filter(item => 
        item.effect === maxValue);
}

//console.log(getBestItem("armor"));

function hasGoodEquipment() {
    const inCheckWeapons = inventory.filter(item => 
        item.name === 'Steel Sword').length;
    const inCheckArmor = inventory.filter(item => 
        item.type === 'armor').length;
    console.log("inCheckWeapons : " + inCheckWeapons +
        ", inCheckArmor : " + inCheckArmor
    );
    if (inCheckWeapons > 0 && inCheckArmor > 0)
        { return true }
    else
        { return false }
}

//console.log("return : " + hasGoodEquipment());
 
function handleCombat(isDragon) {
    // Updated to check for item type instead of specific string
    if (isDragon == true) {
        const inCheckWeapons = inventory.filter(item => 
            item.name === 'Steel Sword').length;
        const inCheckArmor = inventory.filter(item => 
            item.name === 'Iron Shield').length;
        console.log("inCheckWeapons : " + inCheckWeapons +
            ", inCheckArmor : " + inCheckArmor);
        if (inCheckWeapons > 0 && inCheckArmor > 0) {
             //playerGold += 20;
            const maxWeaponEffect = Math.max(...getItemsByType("weapon").map(item => 
                item.effect));
            console.log("maxWeaponEffect " + maxWeaponEffect)
            let weapon = inventory.find(item => 
                item.type === "weapon" && item.effect == maxWeaponEffect);
            const maxArmorEffect = Math.max(...getItemsByType("armor").map(item => 
                item.effect));
            console.log("maxArmorEffect " + maxArmorEffect)
            let armor = inventory.find(item => 
                item.type === "armor" && item.effect == maxArmorEffect);
            console.log("You attack with your " + weapon.name + "!");
            console.log("You attack with your " + armor.name + "!");
            console.log("You deal " + weapon.effect + " damage!");
            console.log("Victory! You found 10 gold!");
            //playerGold += 10;
            return true;
        }
        else {
            console.log("Without Advanced weapon and Armor, you must retreat!");
            //updateHealth(-20);
            return false;
            }
    } else
    {
        console.log("Not a dragon");
            const maxWeaponEffect = Math.max(...getItemsByType("weapon").map(item => 
                item.effect));
            console.log("maxWeaponEffect " + maxWeaponEffect)
            let weapon = inventory.find(item => 
                item.type === "weapon" && item.effect == maxWeaponEffect);
            const maxArmorEffect = Math.max(...getItemsByType("armor").map(item => 
                item.effect));
            console.log("maxArmorEffect " + maxArmorEffect)
            let armor = inventory.find(item => 
                item.type === "armor" && item.effect == maxArmorEffect);
            console.log("You attack with your " + weapon.name + "!");
            console.log("You attack with your " + armor.name + "!");
            console.log("You deal " + weapon.effect + " damage!");
            console.log("Victory! You found 10 gold!");
            //playerGold += 10;
            return true;
    }
}

console.log(handleCombat(true));





